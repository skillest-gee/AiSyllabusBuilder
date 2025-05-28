import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

// src/components/admin/NavBar.tsx
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import SidebarDrawer from "./SidebarDrawer"; // next step

const NavBar = () => {
  const bg = useColorModeValue("white", "gray.900"); // light and dark mode background
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const showMenuButton = useBreakpointValue({ base: true, lg: false });
  return (
    <Box
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex="sticky"
      px={2}
      py={1}
      shadow="sm"
    >
      <HStack justifyContent="space-between">
        <Image src={logo} boxSize="40px" />
        <Flex
          as="nav"
          bg="transparent"
          p={4}
          align="center"
          justify="space-between"
          position="sticky"
          top={0}
          zIndex="1000"
          backdropFilter="blur(6px)"
        >
          {showMenuButton && (
            <IconButton
              icon={<FiMenu />}
              aria-label="Open menu"
              onClick={onOpen}
              variant="ghost"
            />
          )}
          <Box fontWeight="bold">Admin Panel</Box>
        </Flex>

        <SidebarDrawer isOpen={isOpen} onClose={onClose} />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
