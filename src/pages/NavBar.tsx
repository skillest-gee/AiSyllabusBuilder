import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Link,
  Button,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import Hamburger from "./Hamburger";

const NavBar = () => {
  const navLinkColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const bgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <Box bg={bgColor} px={3} py={2} boxShadow="sm" w="100%">
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        direction={{ base: "row", md: "row" }}
      >
        {/* Left: Logo + Title */}
        <HStack spacing={2}>
          <Image src={logo} boxSize={{ base: "28px", md: "36px" }} alt="Logo" />
          <Text
            fontSize={{ base: "sm", md: "xl" }}
            fontWeight="bold"
            color={navLinkColor}
          >
            AiSyl
          </Text>
        </HStack>

        <Spacer />
        {/* Desktop Nav Links */}
        <HStack
          spacing={6}
          display={{ base: "none", md: "flex" }}
          fontSize="lg"
        >
          <Link as={RouterLink} to="/" color={navLinkColor}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" color={navLinkColor}>
            About
          </Link>
          <Link as={RouterLink} to="/services" color={navLinkColor}>
            Services
          </Link>
          <Link as={RouterLink} to="/contact" color={navLinkColor}>
            Contact
          </Link>
        </HStack>

        <Spacer display={{ base: "flex", md: "flex" }} />

        {/* Right: Auth Buttons (always visible) */}
        <HStack spacing={2} ml={{ base: "auto", md: "0" }}>
          <Button
            as={RouterLink}
            to="/login"
            variant="outline"
            size="sm"
            colorScheme="teal"
          >
            Login
          </Button>
          <Button
            as={RouterLink}
            to="/signup"
            variant="solid"
            size="sm"
            colorScheme="teal"
          >
            Sign Up
          </Button>
        </HStack>

        {/* Far right: ColorMode + Hamburger (mobile) */}
        <HStack spacing={1} ml={2} display={{ base: "flex", md: "flex" }}>
          <ColorModeSwitch />
          <Hamburger />
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
