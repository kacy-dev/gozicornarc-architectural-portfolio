

// ============================================
// FILE: app/api/projects/[id]/route.js
// GET, PUT, DELETE single project
// ============================================

import { NextResponse } from 'next/server';
import { getProjectById, updateProject, deleteProject } from '@/lib/db';
import { validateProject } from '@/lib/validators';


export async function GET(request, { params }) {
  try {
    const project = await getProjectById(params.id);
    
    if (!project) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Project not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      project,
    });

  } catch (error) {
    console.error('Get project error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch project',
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
    const validation = validateProject(body);
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
    if (body.description !== undefined) updateData.description = body.description;
    if (body.clientId) updateData.clientId = body.clientId;
    if (body.budget !== undefined) updateData.budget = parseFloat(body.budget) || 0;
    if (body.startDate !== undefined) updateData.startDate = body.startDate ? new Date(body.startDate) : null;
    if (body.endDate !== undefined) updateData.endDate = body.endDate ? new Date(body.endDate) : null;
    if (body.status) updateData.status = body.status;
    if (body.location !== undefined) updateData.location = body.location;

    const project = await updateProject(params.id, updateData);
    
    if (!project) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Project not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Project updated successfully',
      project,
    });

  } catch (error) {
    console.error('Update project error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update project',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const deleted = await deleteProject(params.id);
    
    if (!deleted) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Project not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Project deleted successfully',
    });

  } catch (error) {
    console.error('Delete project error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to delete project',
        error: error.message 
      },
      { status: 500 }
    );
  }
}