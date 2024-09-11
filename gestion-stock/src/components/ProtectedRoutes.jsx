// components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import {  Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : "/login" 
      }
    />
  );
};

export default ProtectedRoute;
