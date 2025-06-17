import {
  Box,
  Flex,
  Text,
  Stack,
  Link,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.600", "gray.400");

  return (
    <Box bg={bg} color={color} mt={10} py={10} px={{ base: 4, md: 8 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="6xl"
        mx="auto"
        gap={6}
      >
        {/* Branding */}
        <Text fontWeight="bold" fontSize="lg">
          AisyBallus
        </Text>

        {/* Nav Links */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          align="center"
        >
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "underline" }}>
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/about"
            _hover={{ textDecoration: "underline" }}
          >
            About
          </Link>
          <Link
            as={RouterLink}
            to="/services"
            _hover={{ textDecoration: "underline" }}
          >
            Services
          </Link>
          <Link
            as={RouterLink}
            to="/contact"
            _hover={{ textDecoration: "underline" }}
          >
            Contact
          </Link>
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={4}>
          <IconButton
            as="a"
            href="https://github.com/"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://twitter.com/"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
          />
        </Stack>
      </Flex>

      {/* Copyright */}
      <Text mt={6} textAlign="center" fontSize="sm" color={color}>
        © {new Date().getFullYear()} AisyBallus. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
