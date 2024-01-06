import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  // Check if there's a user in localStorage
  const storedUser = localStorage.getItem('user');

  // If no user is found, redirect to the login page
  if (!storedUser) {
    return <Navigate to="/login" />;
  }

  // If a user is found, render the protected route
  return <>{element}</>;
};

export default PrivateRoute;