import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiUser, FiLogOut } from "react-icons/fi";
import logo from "../../assets/logo.webp";
import { useAuth } from "@/context/AuthContext"; // ✅ import your auth hook
import ColorModeSwitch from "../ColorModeSwitch";

const LecturerNavbar = () => {
  const bg = useColorModeValue("white", "gray.900");
  const navLinkColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const showMenuButton = useBreakpointValue({ base: true, lg: false });
  const { logout } = useAuth(); // ✅ get logout method

  return (
    <Box
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
      px={4}
      py={2}
      position="sticky"
      top={0}
      zIndex="sticky"
      shadow="sm"
    >
      <Flex align="center" justify="space-between">
        <HStack spacing={3}>
          {showMenuButton && (
            <IconButton
              icon={<FiMenu />}
              aria-label="Open Menu"
              variant="ghost"
            />
          )}
          <Image src={logo} boxSize="36px" />
          <Text fontWeight="bold" fontSize="lg">
            AisyBallus
          </Text>
        </HStack>
        <Spacer display={{ base: "flex", md: "flex" }} />

        <HStack spacing={4}>
          <IconButton
            icon={<FiBell />}
            aria-label="Notifications"
            variant="ghost"
          />
          <Menu>
            <MenuButton as={Avatar} size="sm" name="Student" cursor="pointer" />
            <MenuList>
              <MenuItem icon={<FiUser />}>Profile</MenuItem>
              <MenuItem icon={<FiLogOut />} onClick={logout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
          <ColorModeSwitch />
        </HStack>
      </Flex>
    </Box>
  );
};

export default LecturerNavbar;
