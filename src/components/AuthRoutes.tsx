// AuthRoute.tsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface AuthRouteProps {
  element: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ element, ...rest }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={element} />;
};

export default AuthRoute;
