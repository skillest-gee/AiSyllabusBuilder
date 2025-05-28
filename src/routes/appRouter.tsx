import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
// src/routes/AppRouter.tsx

import Login from "../pages/login";
import Signup from "../pages/signUP";
import Dashboard from "../pages/dashboard";
import AdminDashboard from "../components/admin/AdminDashboard";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
