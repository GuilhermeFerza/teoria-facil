import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem('authToken');

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin" />;
};

export default PrivateRoute;