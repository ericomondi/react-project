import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <ToastContainer/>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
