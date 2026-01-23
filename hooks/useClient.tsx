// ============================================
// FILE: hooks/useClients.js
// Custom hook for easy clients access
// ============================================

'use client';

import { useClients as useClientsContext } from '@/context/ClientContext';

export function useClients() {
  return useClientsContext();
}


