import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/appRouter";
import { ChakraProvider } from "@chakra-ui/react";
import { theme, ColorModeSetup } from "./components/ui/color-mode";

import "./index.css"; // global styles
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
//import { Provider } from "./components/ui/provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeSetup />
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
