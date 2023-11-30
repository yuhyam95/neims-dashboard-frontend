import React, { createContext, useContext, useState, ReactNode } from 'react';
import apiClient from '../services/api-client';

interface User {
  _id: string;
  firstname: string,
  surname: string
}

interface AuthContextProps {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    const login = async (userId: string) => {
      try {
        const userDetailsResponse = await apiClient.get(`/user/${userId}`);
        const userData: User = userDetailsResponse.data;
        console.log(userData)
        setUser(userData);

      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
  
    const logout = () => {
      setUser(null);
    };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
