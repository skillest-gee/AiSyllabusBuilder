// src/color-mode.tsx (or just put this logic in main.tsx)

import { ColorModeScript } from "@chakra-ui/color-mode";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Chakra color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Extend Chakra's theme with color mode support
export const theme = extendTheme({ config });

// Export the script for SSR compatibility (optional in Vite)
export const ColorModeSetup = () => (
  <ColorModeScript initialColorMode={config.initialColorMode} />
);
