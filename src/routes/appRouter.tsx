import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
// src/routes/AppRouter.tsx

import Login from "../pages/login";
import Signup from "../pages/signUP";
import Dashboard from "../pages/dashboard";
import AdminDashboard from "../components/admin/AdminDashboard";
import StudentLayout from "@/pages/StudentLayout";
import LecturerLayout from "@/pages/LecturerLayout";
import ProtectedRoute from "./ProtectedRoute";
import StudentDashboard from "@/pages/Student/StudentDashboard";
import LecturerDashboard from "@/pages/Lecturer/LecturerDashboard";
import LecturerSyllabusBuilder from "@/pages/Lecturer/Subpages/LecturerSyllabusBuilder";
import LecturerAssignments from "@/pages/Lecturer/Subpages/LecturerAssignments";
import StudentAssignments from "@/pages/Student/Subpages/StudentAssignments";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />

      {/* Student Protected Routes */}
      <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
        <Route path="/student/*" element={<StudentLayout />}>
          <Route index element={<div>Welcome to Student Area</div>} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="assignments" element={<StudentAssignments />} />
        </Route>
      </Route>

      {/* Lecturer Protected Routes */}
      <Route element={<ProtectedRoute allowedRoles={["lecturer"]} />}>
        <Route path="/lecturer/*" element={<LecturerLayout />}>
          <Route path="dashboard" element={<LecturerDashboard />} />
          <Route
            path="lecturersyllabusbuilder"
            element={<LecturerSyllabusBuilder />}
          />
          <Route path="assignments" element={<LecturerAssignments />} />
        </Route>
      </Route>
    </Routes>
  );
}
