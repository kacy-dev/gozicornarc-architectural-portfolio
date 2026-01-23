// lib/initAdmin.ts
import { findUserByEmail, createUser } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export async function initAdmin() {
  const adminEmail = process.env.ADMIN_EMAIL!;
  const adminPassword = process.env.ADMIN_PASSWORD!;

  const existingAdmin = await findUserByEmail(adminEmail);

  if (existingAdmin) {
    console.log("Admin already exists");
    return;
  }

  const hashedPassword = hashPassword(adminPassword);

  await createUser({
    email: adminEmail,
    password: hashedPassword,
    role: "admin",
  });

  console.log("Initial admin created successfully");
}
