
import { NextResponse } from 'next/server';
import { destroySession } from '@/lib/session';

export async function POST(request) {
  try {
    await destroySession();
    
    return NextResponse.json({
      success: true,
      message: 'Logout successful',
    });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred during logout' 
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return POST(request);
}