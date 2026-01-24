
// ============================================
// FILE: app/api/projects/route.js
// GET all projects, POST new project
// ============================================

import { NextResponse } from 'next/server';
import { getAllProjects, createProject } from '@/lib/db';
import { validateProject } from '@/lib/validators';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Build filters from query params
    const filters = {};
    if (searchParams.get('status')) {
      filters.status = searchParams.get('status');
    }
    if (searchParams.get('clientId')) {
      filters.clientId = searchParams.get('clientId');
    }

    const projects = await getAllProjects(filters);
    
    return NextResponse.json({
      success: true,
      projects,
      count: projects.length,
    });
  } catch (error) {
    console.error('Get projects error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch projects',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate project data
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

    // Prepare project data
    const projectData = {
      name: body.name.trim(),
      description: body.description || '',
      clientId: body.clientId,
      budget: parseFloat(body.budget) || 0,
      startDate: body.startDate ? new Date(body.startDate) : null,
      endDate: body.endDate ? new Date(body.endDate) : null,
      status: body.status || 'active',
      location: body.location || '',
    };

    const project = await createProject(projectData);
    
    return NextResponse.json({
      success: true,
      message: 'Project created successfully',
      project,
    }, { status: 201 });

  } catch (error) {
    console.error('Create project error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to create project',
        error: error.message 
      },
      { status: 500 }
    );
  }
}
