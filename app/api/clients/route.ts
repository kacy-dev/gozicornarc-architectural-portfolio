// ============================================
// FILE: app/api/clients/route.js
// GET all clients, POST new client
// ============================================

import { NextResponse } from 'next/server';
import { getAllClients, createClient } from '@/lib/db';
import { validateClientData } from '@/lib/validators';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Build filters from query params
    const filters = {};
    if (searchParams.get('search')) {
      const search = searchParams.get('search');
      filters.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ];
    }

    const clients = await getAllClients(filters);
    
    return NextResponse.json({
      success: true,
      clients,
      count: clients.length,
    });
  } catch (error) {
    console.error('Get clients error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch clients',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate client data
    const validation = validateClientData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          errors: validation.errors,
          message: 'Validation failed'
        },
        { status: 400 }
      );
    }

    // Prepare client data
    const clientData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone || '',
      address: body.address || '',
      company: body.company || '',
      notes: body.notes || '',
    };

    const client = await createClient(clientData);
    
    return NextResponse.json({
      success: true,
      message: 'Client created successfully',
      client,
    }, { status: 201 });

  } catch (error) {
    console.error('Create client error:', error);
    
    // Handle duplicate email error
    if (error.message.includes('already exists')) {
      return NextResponse.json(
        { 
          success: false, 
          message: error.message,
          errors: { email: error.message }
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to create client',
        error: error.message 
      },
      { status: 500 }
    );
  }
}
