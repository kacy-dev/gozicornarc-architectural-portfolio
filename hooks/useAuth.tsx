// ============================================
// FILE: hooks/useAuth.js
// Custom hook for easy auth access
// ============================================

'use client';

import { useAuth as useAuthContext } from '@/context/AuthContext';

export function useAuth() {
  return useAuthContext();
}
