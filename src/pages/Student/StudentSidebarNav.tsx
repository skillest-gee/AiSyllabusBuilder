import {
  VStack,
  Text,
  Icon,
  Link as ChakraLink,
  useColorModeValue,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Show,
  Hide,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiBook,
  FiSettings,
  FiCalendar,
  FiClipboard,
  FiBarChart2,
  FiMail,
  FiMenu,
  FiLogOut,
} from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { label: "Dashboard", icon: FiHome, href: "/student/dashboard" },
  { label: "Courses", icon: FiBook, href: "/student/courses" },
  { label: "Lectures", icon: FiCalendar, href: "/student/lectures" },
  { label: "Take Quiz", icon: FiCalendar, href: "/student/takeQuiz" },
  { label: "Assignments", icon: FiClipboard, href: "/student/assignments" },
  { label: "Grades", icon: FiBarChart2, href: "/student/grades" },
  { label: "Messages", icon: FiMail, href: "/student/messages" },
  { label: "Settings", icon: FiSettings, href: "/student/settings" },
];

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const location = useLocation();
  const textColor = useColorModeValue("gray.700", "gray.100");
  const activeColor = useColorModeValue("blue.600", "blue.300");
  const bgHover = useColorModeValue("blue.50", "whiteAlpha.200");

  return (
    <VStack align="start" spacing={4} w="full">
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
            onClick={onClick}
          >
            <Icon as={item.icon} boxSize={5} />
            <Text>{item.label}</Text>
          </ChakraLink>
        );
      })}
    </VStack>
  );
};

const StudentSidebarNav = () => {
  const { logout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Mobile Top Bar */}
      <Hide above="md">
        <Flex
          justify="space-between"
          align="center"
          px={4}
          py={3}
          shadow="md"
          bg="white"
        >
          <Text fontSize="lg" fontWeight="bold">
            AisyBallus
          </Text>
          <Button onClick={onOpen} variant="ghost">
            <FiMenu />
          </Button>
        </Flex>
      </Hide>

      {/* Desktop Sidebar */}
      <Show above="md">
        <Box
          w="250px"
          h="100vh"
          p={4}
          bg={useColorModeValue("gray.50", "gray.800")}
          shadow="md"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={6}>
              AisyBallus
            </Text>
            <NavLinks />
          </Box>
          <Button
            leftIcon={<FiLogOut />}
            colorScheme="red"
            variant="ghost"
            mt={6}
            onClick={logout}
          >
            Logout
          </Button>
        </Box>
      </Show>

      {/* Mobile Drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>AisyBallus</DrawerHeader>
          <DrawerBody
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <NavLinks onClick={onClose} />
            <Button
              leftIcon={<FiLogOut />}
              colorScheme="red"
              variant="ghost"
              mt={6}
              onClick={() => {
                logout();
                onClose();
              }}
            >
              Logout
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default StudentSidebarNav;
