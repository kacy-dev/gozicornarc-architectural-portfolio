// ============================================
// FILE: hooks/useProjects.js
// Custom hook for easy projects access
// ============================================

'use client';

import { useProjects as useProjectsContext } from '@/context/ProjectContext';

export function useProjects() {
  return useProjectsContext();
}
