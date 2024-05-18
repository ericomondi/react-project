import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const TOKEN_VALIDATE_URL = "http://127.0.0.1:8000/auth/verify-token";

const PrivateRoutes: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // Changed initial state to null to represent loading state

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error('No token found');
        }
        const response = await fetch(TOKEN_VALIDATE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token })
        });
        const responseData = await response.json();
        console.log(responseData); // Log the raw response data for debugging
        if (responseData === "Token verified successfully") {
          setIsAuthenticated(true);
        } else {
          throw new Error('Failed to validate token');
        }
      } catch (error) {
        console.log("Error...", error);
        setIsAuthenticated(false);
      }
    };

    fetchAuthStatus();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Render a loading state while authentication is being verified
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
