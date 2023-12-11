import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
  VStack,
  Stack,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import AuthenticationForm from "../components/AuthenticationForm";

type AuthPageProps = {
  signIn: () => void;
};

const AuthPage = ({ signIn }: AuthPageProps) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 1050px)");
  const scale = isLargerThan768 ? "scale(0.9)" : "scale(1.5)";
  const rightMargin = isLargerThan768 ? "7%" : "0%";

  return (
    <Box minH="100vh">
      <Flex
        as="header"
        width="full"
        align="center"
        justifyContent="space-between"
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        position="relative"
      >
        <Stack direction={"row"} spacing={1} justify="center">
          <Image
            src="src\assets\crop-1567050825830.png" // Replace with the path to your logo image
            alt="DigiGrama Logo"
            htmlWidth="50px" // Adjust size as needed
          />
          <Heading as="h1" size="lg" marginTop={1.5}>
            DigiGrama
          </Heading>
        </Stack>
      </Flex>

      <Flex
        direction={isLargerThan768 ? "row" : "column"}
        minHeight="70vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <VStack flex="1" justifyContent="center" p={4}>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            lineHeight="shorter"
            color={useColorModeValue("gray.500", "white")}
            textAlign="center"
          >
            Get your Grama Sevaka Certificate
          </Text>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            lineHeight="shorter"
            color={useColorModeValue("gray.700", "white")}
            textAlign="center"
          >
            Without Any Hassle
          </Text>
          <Image
            src="src\assets\interview.png" // Make sure this path is correct
            alt="DigiGrama Branding"
            boxSize="410px"
            objectFit="contain"
          />
        </VStack>
        <Box
          px={1}
          width="full"
          maxWidth="500px"
          borderRadius={20}
          textAlign="center"
          marginRight={rightMargin}
          marginBottom="3%"
          marginTop={isLargerThan768 ? "0%" : "15%"}
          transform={scale}
          _hover={{ transform: scale }}
        >
          <Button
            colorScheme="green"
            onClick={() => signIn()}
            fontSize="5xl"
            padding={10}
            borderRadius={20}
          >
            Sign In
          </Button>
          {/* <AuthenticationForm signIn={signIn} /> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthPage;
