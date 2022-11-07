import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivatePaths = ({children}) => {
  const context = useAuth();
  console.log(context.user)
  return context.user ? children : <Navigate to="/login" />;
}

export default PrivatePaths;