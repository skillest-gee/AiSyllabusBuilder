// src/routes/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type Props = {
  allowedRoles: ("student" | "lecturer")[];
};

const ProtectedRoute = ({ allowedRoles }: Props) => {
  const { role } = useAuth();
  console.log("Current role:", role);

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to={`/${role}/dashboard`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
