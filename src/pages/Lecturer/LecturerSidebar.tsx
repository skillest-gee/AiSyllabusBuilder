// src/components/lecturer/LecturerSidebarNav.tsx

import {
  VStack,
  Text,
  Icon,
  Link as ChakraLink,
  Box,
  Image,
  Spacer,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiBookOpen,
  FiCalendar,
  FiClipboard,
  FiMessageSquare,
  FiSettings,
  FiLogOut,
  FiFileText,
  FiEdit,
  FiFolder,
  FiHelpCircle,
} from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";
import logo from "@/assets/logo.webp";

const navItems = [
  { label: "Dashboard", icon: FiHome, href: "/lecturer/lecturerdashboard" },
  {
    label: "Build Syllabus",
    icon: FiFileText,
    href: "/lecturer/lecturersyllabusbuilder",
  },
  {
    label: "Plan Lecture",
    icon: FiEdit,
    href: "/lecturer/lecturerlectureplanner",
  },
  { label: "My Courses", icon: FiBookOpen, href: "/lecturer/courses" },
  { label: "Schedule", icon: FiCalendar, href: "/lecturer/schedule" },
  { label: "Assignments", icon: FiClipboard, href: "/lecturer/assignments" },
  { label: "Messages", icon: FiMessageSquare, href: "/lecturer/messages" },
  { label: "Resources", icon: FiFolder, href: "/lecturer/resources" },
  { label: "FAQ", icon: FiHelpCircle, href: "/lecturer/faq" },
  { label: "Settings", icon: FiSettings, href: "/lecturer/settings" },
];

const LecturerSidebarNav = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const textColor = useColorModeValue("gray.700", "gray.100");
  const activeColor = useColorModeValue("blue.600", "blue.300");
  const bgHover = useColorModeValue("blue.50", "whiteAlpha.200");

  return (
    <VStack
      align="start"
      spacing={4}
      h="100vh"
      p={4}
      borderRight="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      bg={useColorModeValue("white", "gray.800")}
    >
      {/* Logo or App Name */}
      <Box mb={6}>
        <Image src={logo} boxSize="40px" />
        {/* <Text fontSize="xl" fontWeight="bold">Lecturer Panel</Text> */}
      </Box>

      {/* Navigation Links */}
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
            _hover={{ bg: bgHover, color: activeColor }}
            p={2}
            borderRadius="md"
            w="full"
          >
            <Icon as={item.icon} boxSize={5} />
            <Text>{item.label}</Text>
          </ChakraLink>
        );
      })}

      <Spacer />

      {/* Logout Button */}
      <Button
        leftIcon={<FiLogOut />}
        variant="ghost"
        colorScheme="red"
        onClick={logout}
        alignSelf="start"
      >
        Logout
      </Button>
    </VStack>
  );
};

export default LecturerSidebarNav;
