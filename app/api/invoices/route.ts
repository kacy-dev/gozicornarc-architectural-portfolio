// ============================================
// FILE: app/api/invoices/route.js
// GET all invoices, POST new invoice
// ============================================

import { NextResponse } from 'next/server';
import { getAllInvoices, createInvoice } from '@/lib/db';
import { validateInvoiceData } from '@/lib/validators';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Build filters from query params
    const filters = {};
    if (searchParams.get('status')) {
      filters.status = searchParams.get('status');
    }
    if (searchParams.get('projectId')) {
      filters.projectId = searchParams.get('projectId');
    }
    if (searchParams.get('clientId')) {
      filters.clientId = searchParams.get('clientId');
    }

    const invoices = await getAllInvoices(filters);
    
    return NextResponse.json({
      success: true,
      invoices,
      count: invoices.length,
    });
  } catch (error) {
    console.error('Get invoices error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch invoices',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate invoice data
    const validation = validateInvoiceData(body);
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

    // Generate invoice number if not provided
    const invoiceNumber = body.invoiceNumber || `INV-${Date.now()}`;

    // Prepare invoice data
    const invoiceData = {
      invoiceNumber,
      projectId: body.projectId,
      clientId: body.clientId,
      amount: parseFloat(body.amount),
      description: body.description || '',
      dueDate: new Date(body.dueDate),
      issueDate: body.issueDate ? new Date(body.issueDate) : new Date(),
      status: body.status || 'pending',
      items: body.items || [],
      tax: parseFloat(body.tax) || 0,
      discount: parseFloat(body.discount) || 0,
      notes: body.notes || '',
    };

    const invoice = await createInvoice(invoiceData);
    
    return NextResponse.json({
      success: true,
      message: 'Invoice created successfully',
      invoice,
    }, { status: 201 });

  } catch (error) {
    console.error('Create invoice error:', error);
    
    if (error.message.includes('already exists')) {
      return NextResponse.json(
        { 
          success: false, 
          message: error.message,
          errors: { invoiceNumber: error.message }
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to create invoice',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

