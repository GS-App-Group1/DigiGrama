import { ChakraProvider } from "@chakra-ui/react";
import AuthPage from "./pages/AuthPage";
import UserHome from "./pages/UserHome";
import GramaHome from "./pages/GramaHome";

function App() {
  return (
    <ChakraProvider>
      {/* <AuthPage /> */}
      {/* <UserHome /> */}
      <GramaHome />
    </ChakraProvider>
  );
}

export default App;
