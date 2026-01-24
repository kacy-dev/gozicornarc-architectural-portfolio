import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  maxPoolSize: 10,
  minPoolSize: 5,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
};

let client;
let clientPromise;

if (!uri) throw new Error("Please add MONGODB_URI to your .env");

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect().then(c => {
      console.log("✅ Connected to MongoDB (dev)");
      return c;
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect().then(c => {
    console.log("✅ Connected to MongoDB (prod)");
    return c;
  });
}

export default clientPromise;

export async function getDB() {
  try {
    const client = await clientPromise;
    const dbName = process.env.DB_NAME || "construction_company";
    return client.db(dbName);
  } catch (error) {
    console.error("❌ Failed to connect to database:", error);
    throw new Error("Database connection failed");
  }
}

export async function getCollection(collectionName: string) {
  const db = await getDB();
  return db.collection(collectionName);
}


// ============================================
// USER OPERATIONS
// ============================================

// ============================================
// ADMIN-SPECIFIC OPERATIONS
// ============================================

export async function countAdmins() {
  const users = await getCollection("users");
  return await users.countDocuments({ role: "admin" });
}

export async function createAdmin({ email, password }) {
  const users = await getCollection("users");

  // Enforce single admin rule
  const adminCount = await countAdmins();
  if (adminCount > 0) {
    throw new Error("Admin already exists. Only one admin is allowed.");
  }

  const newAdmin = {
    email: email.toLowerCase(),
    password,              // already hashed before coming here
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await users.insertOne(newAdmin);

  return {
    ...newAdmin,
    _id: result.insertedId,
    id: result.insertedId.toString(),
  };
}


export async function findUserByEmail(email) {
  const users = await getCollection('users');
  return await users.findOne({ email: email.toLowerCase() });
}

export async function findUserById(id) {
  const users = await getCollection('users');
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  return await users.findOne(query);
}

export async function createUser(userData) {
  const users = await getCollection('users');
  const newUser = {
    ...userData,
    email: userData.email.toLowerCase(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const result = await users.insertOne(newUser);
  return {
    ...newUser,
    _id: result.insertedId,
    id: result.insertedId.toString(),
  };
}

export async function updateUser(id, updates) {
  const users = await getCollection('users');
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  const result = await users.findOneAndUpdate(
    query,
    { $set: { ...updates, updatedAt: new Date() } },
    { returnDocument: 'after' }
  );
  return result.value;
}

export async function deleteUser(id) {
  const users = await getCollection('users');
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  const result = await users.deleteOne(query);
  return result.deletedCount > 0;
}

// ============================================
// PROJECT OPERATIONS
// ============================================

export async function getAllProjects(filters = {}) {
  const projects = await getCollection('projects');
  return await projects.find(filters).sort({ createdAt: -1 }).toArray();
}

export async function getProjectById(id) {
  const projects = await getCollection('projects');
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  return await projects.findOne(query);
}

export async function createProject(projectData) {
  const projects = await getCollection('projects');

  const existingProject = await projects.findOne({ 
    name: { $regex: new RegExp(`^${projectData.name}$`, 'i') } // case-insensitive
  });
  
  if (existingProject) {
    throw new Error('A project with this name already exists');
  } 


  const newProject = {
    ...projectData,
    status: projectData.status || 'active',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const result = await projects.insertOne(newProject);
  return {
    ...newProject,
    _id: result.insertedId,
    id: result.insertedId.toString(),
  };
}


export async function updateProject(id, updates) {
  const projects = await getCollection('projects');
  
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  
  const result = await projects.findOneAndUpdate(
    query,
    { $set: { ...updates, updatedAt: new Date() } },
    { returnDocument: 'after' }
  );
  
  // MongoDB returns the document in 'value' property, but sometimes it's directly in result
  return result.value || result;
}



export async function deleteProject(id) {
  const projects = await getCollection('projects');
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  const result = await projects.deleteOne(query);
  return result.deletedCount > 0;
}

// ============================================
// CLIENT OPERATIONS
// ============================================

export async function getAllClients(filters = {}) {
  const clients = await getCollection('clients');
  return await clients.find(filters).sort({ createdAt: -1 }).toArray();
}

export async function getClientById(id) {
  const clients = await getCollection('clients');
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  return await clients.findOne(query);
}

// export async function createClient(clientData) {
//   const clients = await getCollection('clients');
//   const newClient = {
//     ...clientData,
//     email: clientData.email.toLowerCase(),
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   };
//   const result = await clients.insertOne(newClient);
//   return {
//     ...newClient,
//     _id: result.insertedId,
//     id: result.insertedId.toString(),
//   };
// }


export async function createClient(clientData) {
  const clients = await getCollection('clients');
  
  // Check for duplicate email
  const existingClient = await clients.findOne({ 
    email: clientData.email.toLowerCase()
  });
  
  if (existingClient) {
    throw new Error('A client with this email already exists');
  }
  
  const newClient = {
    ...clientData,
    email: clientData.email.toLowerCase(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  const result = await clients.insertOne(newClient);
  
  return {
    ...newClient,
    _id: result.insertedId,
    id: result.insertedId.toString(),
  };
}

// export async function updateClient(id, updates) {
//   const clients = await getCollection('clients');
//   const query = ObjectId.isValid(id) && id.length === 24
//     ? { _id: new ObjectId(id) }
//     : { id: id };
//   const result = await clients.findOneAndUpdate(
//     query,
//     { $set: { ...updates, updatedAt: new Date() } },
//     { returnDocument: 'after' }
//   );
//   return result.value;
// }

export async function updateClient(id, updates) {
  const clients = await getCollection('clients');
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  const result = await clients.findOneAndUpdate(
    query,
    { $set: { ...updates, updatedAt: new Date() } },
    { returnDocument: 'after' }
  );
  return result.value || result;
}

export async function deleteClient(id) {
  const clients = await getCollection('clients');
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  const result = await clients.deleteOne(query);
  return result.deletedCount > 0;
}

// ============================================
// INVOICE OPERATIONS
// ============================================

export async function getAllInvoices(filters = {}) {
  const invoices = await getCollection('invoices');
  return await invoices.find(filters).sort({ createdAt: -1 }).toArray();
}

export async function getInvoiceById(id) {
  const invoices = await getCollection('invoices');
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  return await invoices.findOne(query);
}

// export async function createInvoice(invoiceData) {
//   const invoices = await getCollection('invoices');
//   const newInvoice = {
//     ...invoiceData,
//     status: invoiceData.status || 'pending',
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   };
//   const result = await invoices.insertOne(newInvoice);
//   return {
//     ...newInvoice,
//     _id: result.insertedId,
//     id: result.insertedId.toString(),
//   };
// }


export async function createInvoice(invoiceData) {
  const invoices = await getCollection('invoices');
  
  // Check for duplicate invoice number
  const existingInvoice = await invoices.findOne({ 
    invoiceNumber: invoiceData.invoiceNumber
  });
  
  if (existingInvoice) {
    throw new Error('An invoice with this number already exists');
  }
  
  const newInvoice = {
    ...invoiceData,
    status: invoiceData.status || 'pending',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  const result = await invoices.insertOne(newInvoice);
  
  return {
    ...newInvoice,
    _id: result.insertedId,
    id: result.insertedId.toString(),
  };
}

// export async function updateInvoice(id, updates) {
//   const invoices = await getCollection('invoices');
//   const query = ObjectId.isValid(id) && id.length === 24
//     ? { _id: new ObjectId(id) }
//     : { id: id };
//   const result = await invoices.findOneAndUpdate(
//     query,
//     { $set: { ...updates, updatedAt: new Date() } },
//     { returnDocument: 'after' }
//   );
//   return result.value;
// }

export async function updateInvoice(id, updates) {
  const invoices = await getCollection('invoices');
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  const result = await invoices.findOneAndUpdate(
    query,
    { $set: { ...updates, updatedAt: new Date() } },
    { returnDocument: 'after' }
  );
  return result.value || result;
}

export async function deleteInvoice(id) {
  const invoices = await getCollection('invoices');
  const query = ObjectId.isValid(id) && id.length === 24
    ? { _id: new ObjectId(id) }
    : { id: id };
  const result = await invoices.deleteOne(query);
  return result.deletedCount > 0;
}