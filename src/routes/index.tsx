import React from "react";
import { Route, Routes } from "react-router-dom";
import Inventory from "../containers/Inventory";
import ProductView from "../containers/ProductView";
import Cart from "../containers/Cart";
import Login from "../containers/Login";

const SecureRoutes = () => {
  return (
    <Routes>
      <Route path="/products/:category" element={<Inventory />} />
      <Route path="/products/productView" element={<ProductView />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default SecureRoutes;
