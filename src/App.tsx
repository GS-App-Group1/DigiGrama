import { ChakraProvider } from "@chakra-ui/react";
import AuthPage from "./pages/AuthPage";
import UserHome from "./pages/UserHome";
import GramaHome from "./pages/GramaHome";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <Home />
      {/* <AuthPage /> */}
      {/* <UserHome /> */}
      {/* <GramaHome /> */}
    </ChakraProvider>
  );
}

export default App;
