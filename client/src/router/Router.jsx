import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import InvoicePage from "../pages/InvoicePage";
import CustomersPage from "../pages/CustomersPage";
import StatisticsPage from "../pages/StatisticsPage";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProductPage from "../pages/ProductPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/invoice" element={<InvoicePage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
