
import { NextResponse } from 'next/server';
import { findUserByEmail } from '@/lib/db';
import { verifyPassword, sanitizeInput } from '@/lib/auth';
import { createSession } from '@/lib/session';
import { validateLoginData } from '@/lib/validators';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const email = sanitizeInput(body.email);
    const password = body.password;
    
    // Validate data
    const validation = validateLoginData({ email, password });
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          errors: validation.errors 
        },
        { status: 400 }
      );
    }
    
    // Find user
    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid credentials' 
        },
        { status: 401 }
      );
    }
    
    // Verify password
    const isValidPassword = verifyPassword(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid credentials' 
        },
        { status: 401 }
      );
    }
    
    // Create session
    await createSession({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    
    // Return success (don't send password)
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: userWithoutPassword,
    });
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred during login' 
      },
      { status: 500 }
    );
  }
}