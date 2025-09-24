import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children, allowedRoles }) {
  const { currentUser, userData } = useAuth();

  // Check if user is logged in
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Wait until userData is loaded (because it contains email, role, icuId, etc.)
  if (!userData) {
    return <div>Loading...</div>; 
  }

  // Check if user's role is allowed for this route
  if (allowedRoles && !allowedRoles.includes(userData.role)) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
