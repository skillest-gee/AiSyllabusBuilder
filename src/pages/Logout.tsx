import { Button, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const bg = useColorModeValue("gray.700", "gray.100"); // light and dark mode background

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Button colorScheme={bg} variant="solid" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
