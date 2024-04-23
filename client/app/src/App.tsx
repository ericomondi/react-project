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
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./components/AddProduct";
import { Store } from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ClearCart from "./pages/ClearCart";


function App(): JSX.Element {
  return (
    <ShoppingCartProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<Layout />}>
          <Route element={<PrivateRoutes />}>
            <Route path="/products/add-product" element={<AddProduct/>}></Route>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/store" element={< Store/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/clear-cart" element={<ClearCart />} />
          </Route>
        </Route>
      </Routes>
    </Router>
    </ShoppingCartProvider>
  );
}

export default App;
