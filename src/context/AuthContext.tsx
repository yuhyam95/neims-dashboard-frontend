import React, { createContext, useContext, useState, ReactNode } from 'react';
import { jwtDecode } from "jwt-decode";

interface User {
  _id: string;
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
  
    const login = (token: string) => {
      try {
        const decodedToken = jwtDecode(token) as { _id: string }; // Assuming the token contains an 'email' field
        console.log(decodedToken)
        if (decodedToken) {
          const userData: User = { _id: decodedToken._id }; // Adjust according to your actual user data structure
          setUser(userData);
        } else {
          console.error('Invalid token');
        }
      } catch (error) {
        console.error('Error decoding token:', error);
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
