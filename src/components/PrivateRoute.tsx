import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const storedUser = localStorage.getItem('user');

  if (!storedUser) {
    return <Navigate to="/login" />;
  }

  // If a user is found, render the protected route
  return <>{element}</>;
};

export default PrivateRoute;