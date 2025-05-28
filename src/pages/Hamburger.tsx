import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navLinkColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const closeButtonColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      {/* Hamburger button (visible only on mobile) */}
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon />}
        variant="ghost"
        size="sm"
        aria-label="Open Navigation"
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxW="200px" w="80%">
          {" "}
          {/* Adjust width here */}
          <DrawerCloseButton color={closeButtonColor} />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <Link
                as={RouterLink}
                to="/"
                w="100%"
                color={navLinkColor}
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/about"
                w="100%"
                color={navLinkColor}
                onClick={onClose}
              >
                About
              </Link>
              <Link
                as={RouterLink}
                to="/services"
                w="100%"
                color={navLinkColor}
                onClick={onClose}
              >
                Services
              </Link>
              <Link
                as={RouterLink}
                to="/contact"
                w="100%"
                color={navLinkColor}
                onClick={onClose}
              >
                Contact
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Hamburger;
