
import { cookies } from 'next/headers';
import crypto from 'crypto';

const SESSION_CONFIG = {
  cookieName: 'admin_session',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
};

/**
 * Create a new session for authenticated user
 */
export async function createSession(userData) {
  const sessionData = {
    userId: userData.id,
    email: userData.email,
    role: userData.role || 'admin',
    createdAt: Date.now(),
    expiresAt: Date.now() + SESSION_CONFIG.maxAge,
  };

  // Encode session data
  const sessionToken = Buffer.from(JSON.stringify(sessionData)).toString('base64');
  
  // Set cookie
  const cookieStore = await cookies();
  cookieStore.set(SESSION_CONFIG.cookieName, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_CONFIG.maxAge / 1000, // Convert to seconds
    path: '/',
  });

  return sessionToken;
}

/**
 * Get current session data
 */
export async function getSession() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(SESSION_CONFIG.cookieName)?.value;

    if (!sessionToken) {
      return null;
    }

    const sessionData = JSON.parse(
      Buffer.from(sessionToken, 'base64').toString('utf-8')
    );

    // Check if session is expired
    if (Date.now() > sessionData.expiresAt) {
      await destroySession();
      return null;
    }

    return sessionData;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
}

/**
 * Verify session token (used in middleware)
 */
export function verifySessionToken(token) {
  try {
    if (!token) return null;

    const sessionData = JSON.parse(
      Buffer.from(token, 'base64').toString('utf-8')
    );

    // Check if session is expired
    if (Date.now() > sessionData.expiresAt) {
      return null;
    }

    return sessionData;
  } catch (error) {
    return null;
  }
}

/**
 * Destroy current session (logout)
 */
export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_CONFIG.cookieName);
}

/**
 * Refresh session expiry
 */
export async function refreshSession() {
  const session = await getSession();
  if (!session) return false;

  const updatedSession = {
    ...session,
    expiresAt: Date.now() + SESSION_CONFIG.maxAge,
  };

  const sessionToken = Buffer.from(JSON.stringify(updatedSession)).toString('base64');
  
  const cookieStore = await cookies();
  cookieStore.set(SESSION_CONFIG.cookieName, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_CONFIG.maxAge / 1000,
    path: '/',
  });

  return true;
}
