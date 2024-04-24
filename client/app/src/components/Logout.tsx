import React from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Clearing the local storage
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("shopping-cart");
    navigate("/login");
    toast.success("You have been successfully logged out.", {
      autoClose: 5000000,
    }); 
  };
  return (
    <div>
      <ToastContainer />
      <h1>Logging Out...</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
