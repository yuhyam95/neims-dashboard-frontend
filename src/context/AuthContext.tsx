
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import apiClient from '../services/api-client';

interface User {
  _id: string;
  firstname: string;
  surname: string;
  role: {
    id: string;
    name: string;
  };
  station: {
    id: string;
    name: string;
  };
}

interface AuthContextProps {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (userId: string) => {   
    try {
      setLoading(true)
      const userDetailsResponse = await apiClient.get(`/user/${userId}`);
      const userData: User = userDetailsResponse.data;
      setUser(userData);
      setLoading(false)
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Error fetching user details:', error);
      setLoading(false)
    }
  };

  const logout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoading, user, login, logout, }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

