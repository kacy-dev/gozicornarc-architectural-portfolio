
// ============================================
// FILE: app/api/invoices/[id]/route.js
// GET, PUT, DELETE single invoice
// ============================================

import { NextResponse } from 'next/server';
import { getInvoiceById, updateInvoice, deleteInvoice } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const invoice = await getInvoiceById(params.id);
    
    if (!invoice) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invoice not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      invoice,
    });

  } catch (error) {
    console.error('Get invoice error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch invoice',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json();

    // Prepare update data
    const updateData = {};
    
    if (body.amount !== undefined) updateData.amount = parseFloat(body.amount);
    if (body.description !== undefined) updateData.description = body.description;
    if (body.dueDate) updateData.dueDate = new Date(body.dueDate);
    if (body.issueDate) updateData.issueDate = new Date(body.issueDate);
    if (body.status) updateData.status = body.status;
    if (body.items) updateData.items = body.items;
    if (body.tax !== undefined) updateData.tax = parseFloat(body.tax);
    if (body.discount !== undefined) updateData.discount = parseFloat(body.discount);
    if (body.notes !== undefined) updateData.notes = body.notes;
    if (body.paidDate) updateData.paidDate = new Date(body.paidDate);

    const invoice = await updateInvoice(params.id, updateData);
    
    if (!invoice) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invoice not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Invoice updated successfully',
      invoice,
    });

  } catch (error) {
    console.error('Update invoice error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update invoice',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const deleted = await deleteInvoice(params.id);
    
    if (!deleted) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invoice not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Invoice deleted successfully',
    });

  } catch (error) {
    console.error('Delete invoice error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to delete invoice',
        error: error.message 
      },
      { status: 500 }
    );
  }
}
