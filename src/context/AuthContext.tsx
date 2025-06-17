import { createContext, useContext, useEffect, useState } from "react";

type Role = "student" | "lecturer" | null;

type AuthContextType = {
  role: Role;
  setRole: (role: "student" | "lecturer") => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRoleState] = useState<Role>(null);

  // Load role from localStorage on initial load
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole === "student" || storedRole === "lecturer") {
      setRoleState(storedRole);
    }
  }, []);

  const setRole = (newRole: "student" | "lecturer") => {
    localStorage.setItem("role", newRole);
    setRoleState(newRole);
  };

  const logout = () => {
    localStorage.removeItem("role");
    setRoleState(null);
  };

  return (
    <AuthContext.Provider value={{ role, setRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
