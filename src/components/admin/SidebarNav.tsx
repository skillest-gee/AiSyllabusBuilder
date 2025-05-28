// src/components/admin/Aside.tsx

import {
  VStack,
  Text,
  Icon,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiBook,
  FiUsers,
  FiSettings,
  FiBarChart2,
} from "react-icons/fi";

const navItems = [
  { label: "Dashboard", icon: FiHome, href: "/admin/dashboard" },
  { label: "Courses", icon: FiBook, href: "/admin/courses" },
  { label: "Users", icon: FiUsers, href: "/admin/users" },
  { label: "Analytics", icon: FiBarChart2, href: "/admin/analytics" },
  { label: "Settings", icon: FiSettings, href: "/admin/settings" },
];

const SidebarNav = () => {
  const location = useLocation();
  const textColor = useColorModeValue("gray.700", "gray.100"); // Light vs Dark mode
  const activeColor = useColorModeValue("blue.600", "blue.300");
  const bgHover = useColorModeValue("blue.50", "whiteAlpha.200");

  return (
    <VStack align="start" spacing={4}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.href;

        return (
          <ChakraLink
            as={NavLink}
            to={item.href}
            key={item.label}
            display="flex"
            alignItems="center"
            gap={3}
            fontSize="md"
            fontWeight={isActive ? "bold" : "medium"}
            color={isActive ? activeColor : textColor}
            bg={isActive ? bgHover : "transparent"}
            _hover={{
              bg: bgHover,
              color: activeColor,
            }}
            p={2}
            borderRadius="md"
            w="full"
          >
            <Icon as={item.icon} boxSize={5} />
            <Text>{item.label}</Text>
          </ChakraLink>
        );
      })}
    </VStack>
  );
};

export default SidebarNav;
