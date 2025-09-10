import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = ({ user, setUser }) => {
  // Als de gebruiker al is ingelogd, redirect naar dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <Login setUser={setUser} />
    </div>
  );
};

export default LoginPage;