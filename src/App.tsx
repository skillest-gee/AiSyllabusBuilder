import { Global } from "@emotion/react";
import AppRouter from "./routes/appRouter";

function App() {
  return (
    <>
      <Global
        styles={`
          html {
            scroll-behavior: smooth,
            scrollPaddingTop: "100px",
          }
        `}
      />
      <AppRouter />
    </>
  );
}

export default App;
