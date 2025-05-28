// ColorModeButton.tsx
import { HStack, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
      <Text>{colorMode === "dark" ? "Dark" : "Light"} Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
