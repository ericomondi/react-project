// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomeComponent from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Logout from "./components/Logout";
import PrivateRoutes from "./store/PrivateRoute";
import { GoogleLogin } from "@react-oauth/google";
import UseGoogleLogin from "./components/GoogleLogin";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<UseGoogleLogin />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;