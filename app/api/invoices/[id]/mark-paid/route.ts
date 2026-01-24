

import { NextResponse } from 'next/server';
import { updateInvoice } from '@/lib/db';

export async function POST(request, { params }) {
  try {
    const invoice = await updateInvoice(params.id, {
      status: 'paid',
      paidDate: new Date(),
    });
    
    if (!invoice) {
      return NextResponse.json(
        { success: false, message: 'Invoice not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Invoice marked as paid',
      invoice,
    });
  } catch (error) {
    console.error('Mark paid error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to mark invoice as paid' },
      { status: 500 }
    );
  }
}