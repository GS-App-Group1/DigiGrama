import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Text,
  Divider,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

type AuthPageProps = {
  signIn: () => void;
};

const AuthenticationForm = ({ signIn }: AuthPageProps) => {
  // State to track if the user is registering or logging in
  const [isRegistering, setIsRegistering] = useState(false);

  // Function to handle the form switch
  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <Box
      borderRadius="lg"
      m={4}
      p={8}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
    >
      <Stack spacing={4}>
        <Stack direction={"row"} spacing={4} justify="center">
          <Button
            colorScheme={!isRegistering ? "green" : "gray"}
            variant={!isRegistering ? "solid" : "outline"}
            onClick={() => setIsRegistering(false)}
          >
            Login
          </Button>
          <Button
            colorScheme={isRegistering ? "green" : "gray"}
            variant={isRegistering ? "solid" : "outline"}
            onClick={() => setIsRegistering(true)}
          >
            Register
          </Button>
        </Stack>
        <Text align="center">Sign in with:</Text>
        <Stack direction={"row"} spacing={6} justify="center">
          <IconButton
            aria-label="Sign in with Facebook"
            icon={<FaFacebook />}
            colorScheme="facebook"
          />
          <IconButton
            aria-label="Sign in with Google"
            icon={<FaGoogle />}
            colorScheme="red"
          />
          <IconButton
            aria-label="Sign in with Twitter"
            icon={<FaTwitter />}
            colorScheme="twitter"
          />
        </Stack>
        <Divider />
        <FormControl id={isRegistering ? "email-register" : "email-login"}>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl
          id={isRegistering ? "password-register" : "password-login"}
        >
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="green" onClick={() => signIn()}>
          {isRegistering ? "Register" : "Sign in"}
        </Button>
        {!isRegistering && (
          <Text align="center">
            Not a member?{" "}
            <Link color={"green.500"} onClick={toggleForm}>
              Register
            </Link>
          </Text>
        )}
        {isRegistering && (
          <Text align="center">
            Already a member?{" "}
            <Link color={"green.500"} onClick={toggleForm}>
              Login
            </Link>
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default AuthenticationForm;
