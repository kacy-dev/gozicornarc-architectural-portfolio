
// ============================================
// FILE: context/ProjectContext.js
// Project Context - Manages projects data globally
// ============================================

'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ProjectContext = createContext({
  projects: [],
  isLoading: true,
  error: null,
  fetchProjects: async () => {},
  addProject: async () => {},
  updateProject: async () => {},
  deleteProject: async () => {},
  getProjectById: () => {},
  refreshProjects: async () => {},
});

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  /**
   * Fetch all projects from API
   */
  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('/api/projects', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setProjects(data.projects || []);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to fetch projects');
      }
    } catch (err) {
      console.error('Fetch projects error:', err);
      setError('An error occurred while fetching projects');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Add new project
   */
  const addProject = async (projectData) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(projectData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setProjects(prev => [...prev, data.project]);
        return { success: true, project: data.project };
      } else {
        return { 
          success: false, 
          message: data.message || 'Failed to add project',
          errors: data.errors 
        };
      }
    } catch (err) {
      console.error('Add project error:', err);
      return { 
        success: false, 
        message: 'An error occurred while adding project' 
      };
    }
  };

  /**
   * Update existing project
   */
  const updateProject = async (projectId, updates) => {
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(updates),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setProjects(prev =>
          prev.map(project =>
            project.id === projectId ? data.project : project
          )
        );
        return { success: true, project: data.project };
      } else {
        return { 
          success: false, 
          message: data.message || 'Failed to update project' 
        };
      }
    } catch (err) {
      console.error('Update project error:', err);
      return { 
        success: false, 
        message: 'An error occurred while updating project' 
      };
    }
  };

  /**
   * Delete project
   */
  const deleteProject = async (projectId) => {
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setProjects(prev => prev.filter(project => project.id !== projectId));
        return { success: true };
      } else {
        return { 
          success: false, 
          message: data.message || 'Failed to delete project' 
        };
      }
    } catch (err) {
      console.error('Delete project error:', err);
      return { 
        success: false, 
        message: 'An error occurred while deleting project' 
      };
    }
  };

  /**
   * Get project by ID
   */
  const getProjectById = (projectId) => {
    return projects.find(project => project.id === projectId) || null;
  };

  /**
   * Refresh projects (alias for fetchProjects)
   */
  const refreshProjects = fetchProjects;

  const value = {
    projects,
    isLoading,
    error,
    fetchProjects,
    addProject,
    updateProject,
    deleteProject,
    getProjectById,
    refreshProjects,
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within ProjectProvider');
  }
  return context;
}