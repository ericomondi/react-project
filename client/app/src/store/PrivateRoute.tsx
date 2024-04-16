import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes: React.FC = () => {
  const auth = localStorage.getItem("isLoggedIn");

  if (auth === null || auth === undefined) {
    return <Navigate to="/login" />;
  }


  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
