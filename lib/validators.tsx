

// ============================================
// FILE: lib/validators.js
// Data Validation Functions
// ============================================

/**
 * Validate login credentials
 */
export function validateLoginData(data) {
  const errors = {};

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  } else if (data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validate project data
 */
// export function validateProjectData(data) {
//   const errors = {};

//   if (!data.name || data.name.trim().length === 0) {
//     errors.name = 'Project name is required';
//   }

//   if (!data.clientId) {
//     errors.clientId = 'Client is required';
//   }

//   if (data.budget && isNaN(Number(data.budget))) {
//     errors.budget = 'Budget must be a valid number';
//   }

//   if (data.startDate && !isValidDate(data.startDate)) {
//     errors.startDate = 'Invalid start date';
//   }

//   return {
//     isValid: Object.keys(errors).length === 0,
//     errors,
//   };
// }


// / Validation function


export function validateProject(data) {
  const errors = {};

  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Project name is required';
  }

  if (data.name > 1) {
    errors.name = 'Project already exists, Pls choose another name';
  }

  if (!data.clientId) {
    errors.clientId = 'Client is required';
  }

  if (data.budget && (isNaN(data.budget) || data.budget < 0)) {
    errors.budget = 'Budget must be a valid positive number';
  }

  if (data.startDate && data.endDate) {
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    if (end < start) {
      errors.endDate = 'End date must be after start date';
    }
  }

  const validStatuses = ['active', 'completed', 'on-hold', 'cancelled'];
  if (data.status && !validStatuses.includes(data.status)) {
    errors.status = 'Invalid status value';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validate client data
 */
export function validateClientData(data) {
  const errors = {};

  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Client name is required';
  }

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (data.phone && !/^\+?[\d\s-()]+$/.test(data.phone)) {
    errors.phone = 'Invalid phone number format';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validate invoice data
 */
export function validateInvoiceData(data) {
  const errors = {};

  if (!data.projectId) {
    errors.projectId = 'Project is required';
  }

  if (!data.amount || isNaN(Number(data.amount)) || Number(data.amount) <= 0) {
    errors.amount = 'Valid amount is required';
  }

  if (!data.dueDate || !isValidDate(data.dueDate)) {
    errors.dueDate = 'Valid due date is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Check if date string is valid
 */
function isValidDate(dateString) {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
}

/**
 * Sanitize object (remove undefined/null values)
 */
export function sanitizeObject(obj) {
  const sanitized = {};
  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      sanitized[key] = obj[key];
    }
  }
  return sanitized;
}