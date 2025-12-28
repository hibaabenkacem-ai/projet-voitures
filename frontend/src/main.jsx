import React from "react";
//import "./styles/variables.css";
//import "./styles/base.css";
//import "./styles/layout.css";
//import "./styles/components.css";
//import "./styles/auth.css";
import "./styles/style.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import HomeUser from "./pages/HomeUser";
import HomeAdmin from "./pages/HomeAdmin";

const Private = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginRegister />} />
      <Route path="/user/home" element={<Private role="user"><HomeUser /></Private>} />
      <Route path="/admin/home" element={<Private role="admin"><HomeAdmin /></Private>} />
    </Routes>
  </BrowserRouter>
);
