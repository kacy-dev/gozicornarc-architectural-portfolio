import { NextResponse } from 'next/server';

// ===== CONFIGURATION =====
const CONFIG = {
  // Routes that require authentication
  protectedRoutes: ['/admin/dashboard', '/admin'],
  
  // Auth-related routes
  authRoutes: ['/login', '/register'],
  
  // Public routes (accessible to everyone)
  publicRoutes: ['/', '/about', '/contact', '/projects'],
  
  // API routes that require authentication
  protectedApiRoutes: ['/api/projects', '/api/clients', '/api/invoices', '/api/materials'],
  
  // Public API routes (no auth needed)
  publicApiRoutes: ['/api/auth/login', '/api/auth/register'],
  
  // Session cookie name
  sessionCookie: 'admin_session',
  
  // Session expiry (7 days in milliseconds)
  sessionExpiry: 7 * 24 * 60 * 60 * 1000,
};

// ===== HELPER FUNCTIONS =====

/**
 * Verify if the session token is valid
 * In production, you'd verify against database or JWT
 */
async function verifySession(token) {
  if (!token) return null;
  
  try {
    // TODO: Replace with actual session verification
    // This could be:
    // 1. Database lookup for session token
    // 2. JWT verification
    // 3. Redis cache check
    
    // For now, basic validation
    const sessionData = JSON.parse(
      Buffer.from(token, 'base64').toString('utf-8')
    );
    
    // Check if session is expired
    if (Date.now() > sessionData.expiresAt) {
      return null;
    }
    
    return sessionData;
  } catch (error) {
    console.error('Session verification error:', error);
    return null;
  }
}

/**
 * Check if path matches any pattern in the list
 */
function matchesPath(pathname, patterns) {
  return patterns.some(pattern => {
    // Exact match
    if (pathname === pattern) return true;
    
    // Wildcard match (e.g., /dashboard matches /dashboard/*)
    if (pathname.startsWith(pattern + '/')) return true;
    
    return false;
  });
}

/**
 * Check if the request is for a protected route
 */
function isProtectedRoute(pathname) {
  return matchesPath(pathname, CONFIG.protectedRoutes);
}

/**
 * Check if the request is for an auth route
 */
function isAuthRoute(pathname) {
  return matchesPath(pathname, CONFIG.authRoutes);
}

/**
 * Check if the request is for a protected API route
 */
function isProtectedApiRoute(pathname) {
  return matchesPath(pathname, CONFIG.protectedApiRoutes);
}

/**
 * Check if the request is for a public API route
 */
function isPublicApiRoute(pathname) {
  return matchesPath(pathname, CONFIG.publicApiRoutes);
}

// ===== MAIN MIDDLEWARE =====

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Get session token from cookies
  const sessionToken = request.cookies.get(CONFIG.sessionCookie)?.value;
  
  // Verify the session
  const session = await verifySession(sessionToken);
  const isAuthenticated = !!session;
  
  // ===== HANDLE PROTECTED ROUTES =====
  if (isProtectedRoute(pathname)) {
    if (!isAuthenticated) {
      // Not authenticated, redirect to login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname); // Save intended destination
      return NextResponse.redirect(loginUrl);
    }
    
    // Authenticated, allow access
    const response = NextResponse.next();
    
    // Refresh session cookie (extend expiry)
    response.cookies.set(CONFIG.sessionCookie, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: CONFIG.sessionExpiry / 1000, // Convert to seconds
      path: '/',
    });
    
    return response;
  }
  
  // ===== HANDLE AUTH ROUTES (login, register) =====
  if (isAuthRoute(pathname)) {
    if (isAuthenticated) {
      // Already logged in, redirect to dashboard
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    
    // Not logged in, allow access to auth pages
    return NextResponse.next();
  }
  
  // ===== HANDLE PROTECTED API ROUTES =====
  if (isProtectedApiRoute(pathname)) {
    if (!isAuthenticated) {
      // Return 401 Unauthorized
      return NextResponse.json(
        { 
          success: false, 
          error: 'Unauthorized',
          message: 'You must be logged in to access this resource' 
        },
        { status: 401 }
      );
    }
    
    // Authenticated, add user info to headers for API routes to use
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', session.userId);
    requestHeaders.set('x-user-role', session.role);
    requestHeaders.set('x-user-email', session.email);
    
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
  
  // ===== HANDLE PUBLIC API ROUTES =====
  if (isPublicApiRoute(pathname)) {
    return NextResponse.next();
  }
  
  // ===== SECURITY HEADERS FOR ALL ROUTES =====
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Only in production
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains'
    );
  }
  
  return response;
}

// ===== MIDDLEWARE CONFIG =====
export const config = {
  /*
   * Match all request paths except:
   * - _next/static (static files)
   * - _next/image (image optimization)
   * - favicon.ico (favicon)
   * - public folder files
   */
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};