
// ============================================
// FILE: context/ClientContext.js
// Client Context - Manages clients data globally
// ============================================

'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ClientContext = createContext({
  clients: [],
  isLoading: true,
  error: null,
  fetchClients: async () => {},
  addClient: async () => {},
  updateClient: async () => {},
  deleteClient: async () => {},
  getClientById: () => {},
  refreshClients: async () => {},
});

export function ClientProvider({ children }) {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('/api/clients', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setClients(data.clients || []);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to fetch clients');
      }
    } catch (err) {
      console.error('Fetch clients error:', err);
      setError('An error occurred while fetching clients');
    } finally {
      setIsLoading(false);
    }
  };

  const addClient = async (clientData) => {
    try {
      const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(clientData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setClients(prev => [...prev, data.client]);
        return { success: true, client: data.client };
      } else {
        return { 
          success: false, 
          message: data.message || 'Failed to add client',
          errors: data.errors 
        };
      }
    } catch (err) {
      console.error('Add client error:', err);
      return { 
        success: false, 
        message: 'An error occurred while adding client' 
      };
    }
  };

  const updateClient = async (clientId, updates) => {
    try {
      const response = await fetch(`/api/clients/${clientId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(updates),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setClients(prev =>
          prev.map(client =>
            client.id === clientId ? data.client : client
          )
        );
        return { success: true, client: data.client };
      } else {
        return { 
          success: false, 
          message: data.message || 'Failed to update client' 
        };
      }
    } catch (err) {
      console.error('Update client error:', err);
      return { 
        success: false, 
        message: 'An error occurred while updating client' 
      };
    }
  };

  const deleteClient = async (clientId) => {
    try {
      const response = await fetch(`/api/clients/${clientId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setClients(prev => prev.filter(client => client.id !== clientId));
        return { success: true };
      } else {
        return { 
          success: false, 
          message: data.message || 'Failed to delete client' 
        };
      }
    } catch (err) {
      console.error('Delete client error:', err);
      return { 
        success: false, 
        message: 'An error occurred while deleting client' 
      };
    }
  };

  const getClientById = (clientId) => {
    return clients.find(client => client.id === clientId) || null;
  };

  const refreshClients = fetchClients;

  const value = {
    clients,
    isLoading,
    error,
    fetchClients,
    addClient,
    updateClient,
    deleteClient,
    getClientById,
    refreshClients,
  };

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  );
}

export function useClients() {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error('useClients must be used within ClientProvider');
  }
  return context;
}
