import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useAuth();

  // Check if the user is authenticated
  if (!user) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  // Render the protected route if authenticated
  return <>{element}</>;
};

export default PrivateRoute;
