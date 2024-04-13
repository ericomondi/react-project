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

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound/>}/>
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