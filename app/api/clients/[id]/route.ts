

// ============================================
// FILE: app/api/clients/[id]/route.js
// GET, PUT, DELETE single client
// ============================================

import { NextResponse } from 'next/server';
import { getClientById, updateClient, deleteClient } from '@/lib/db';
import { validateClientData } from '@/lib/validators';

export async function GET(request, { params }) {
  try {
    const client = await getClientById(params.id);
    
    if (!client) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Client not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      client,
    });

  } catch (error) {
    console.error('Get client error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch client',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    
    // Validate if provided
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

    // Prepare update data
    const updateData = {};
    
    if (body.name) updateData.name = body.name.trim();
    if (body.email) updateData.email = body.email.trim().toLowerCase();
    if (body.phone !== undefined) updateData.phone = body.phone;
    if (body.address !== undefined) updateData.address = body.address;
    if (body.company !== undefined) updateData.company = body.company;
    if (body.notes !== undefined) updateData.notes = body.notes;

    const client = await updateClient(params.id, updateData);
    
    if (!client) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Client not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Client updated successfully',
      client,
    });

  } catch (error) {
    console.error('Update client error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update client',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const deleted = await deleteClient(params.id);
    
    if (!deleted) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Client not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Client deleted successfully',
    });

  } catch (error) {
    console.error('Delete client error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to delete client',
        error: error.message 
      },
      { status: 500 }
    );
  }
}