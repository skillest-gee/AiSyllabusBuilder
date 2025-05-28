// ColorModeButton.tsx
import {
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const showLabel = useBreakpointValue({ base: false, md: true }); // Hide on mobile

  return (
    <HStack>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <LuSun /> : <LuMoon />}
        aria-label="Toggle color mode"
        variant="ghost"
        size="sm"
        boxSize="40px"
      />
      {showLabel && (
        <Text fontSize="sm">
          {colorMode === "dark" ? "Dark" : "Light"} Mode
        </Text>
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
