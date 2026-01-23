
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { findUserById } from '@/lib/db';

export async function GET(request) {
  try {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.json({
        authenticated: false,
        user: null,
      });
    }
    
    // Optionally verify user still exists in database
    const user = await findUserById(session.userId);
    if (!user) {
      return NextResponse.json({
        authenticated: false,
        user: null,
      });
    }
    
    // Remove sensitive data
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json({
      authenticated: true,
      user: userWithoutPassword,
    });
    
  } catch (error) {
    console.error('Verify session error:', error);
    return NextResponse.json({
      authenticated: false,
      user: null,
    });
  }
}