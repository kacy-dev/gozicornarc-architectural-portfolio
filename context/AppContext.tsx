
// ============================================
// FILE: context/AppContext.js
// App Context - Wraps all contexts together
// ============================================

'use client';

import {AuthProvider } from './AuthContext';
import {ProjectProvider }from './ProjectContext';
import { ClientProvider } from './ClientContext';

export function AppProvider({ children }) {
  return (
    <AuthProvider>
      <ProjectProvider>
        <ClientProvider>
          {children}
        </ClientProvider>
      </ProjectProvider>
    </AuthProvider>
  );
}