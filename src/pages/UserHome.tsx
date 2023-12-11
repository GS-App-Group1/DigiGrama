import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  VStack,
  useColorModeValue,
  Stack,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import FormComponent from "../components/UserApply";
import UserStatus from "../components/UserStatus";
import { useState } from "react";

const UserHomePage = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 1050px)");
  const [isApply, setIsApply] = useState(true);
  const [isStatus, setIsStatus] = useState(false);
  const [isHelp, setIsHelp] = useState(false);

  const handleApply = () => {
    setIsApply(true);
    setIsStatus(false);
    setIsHelp(false);
  };

  const handleStatus = () => {
    setIsApply(false);
    setIsStatus(true);
    setIsHelp(false);
  };

  const handleHelp = () => {
    setIsApply(false);
    setIsStatus(false);
    setIsHelp(true);
  };

  return (
    <Flex direction="column" minH="100vh">
      {/* Header */}
      <Flex
        as="header"
        width="full"
        align="center"
        justifyContent="space-between"
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("gray.200", "gray.900")}
      >
        <Stack direction={"row"} spacing={1} justify="center">
          <Image
            src="src/assets/crop-1567050825830.png"
            alt="DigiGrama Logo"
            htmlWidth="50px"
          />
          <Heading as="h1" size="lg" marginTop={1.5}>
            DigiGrama
          </Heading>
        </Stack>
        <Popover>
          <PopoverTrigger>
            <Box
              marginRight={5}
              borderRadius="full"
              border="2px"
              borderColor="black"
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding={2}
              cursor="pointer"
            >
              <FaUser size="1.5em" />
            </Box>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>User</PopoverHeader>
              <PopoverBody>
                {/* Add your user details here */}
                <Button
                  colorScheme="red"
                  _focus={{
                    outline: "none",
                  }}
                >
                  Logout
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Flex>

      {/* Content Area */}
      <Flex
        direction={isLargerThan768 ? "row" : "column"} // Change Flex direction based on screen width
      >
        {/* Requests */}
        <Box display="flex" flex={1} justifyContent="center">
          <Box borderRadius={30}>
            <Box
              display="flex"
              flex={1}
              borderRadius={20}
              padding={10}
              shadow="xl"
              transform="scale(0.9)"
              _hover={{ transform: "scale(0.9)" }}
            >
              <VStack spacing={16} align="stretch">
                <Box position="relative" paddingLeft="25%">
                  <h1>
                    <b>Welcome</b>
                  </h1>
                </Box>
                <Button
                  size="lg"
                  colorScheme="green"
                  fontSize="xx-large"
                  padding={9}
                  borderRadius={15}
                  onClick={handleApply}
                  boxShadow={isApply ? "0 0 20px #29C53F" : "none"}
                  _focus={{
                    outline: "none",
                  }}
                >
                  Apply for grama certificate
                </Button>
                <Button
                  size="lg"
                  colorScheme="green"
                  fontSize="xx-large"
                  padding={9}
                  borderRadius={15}
                  onClick={handleStatus}
                  boxShadow={isStatus ? "0 0 20px #29C53F" : "none"}
                  _focus={{
                    outline: "none",
                  }}
                >
                  Check status
                </Button>
                <Button
                  size="lg"
                  colorScheme="green"
                  fontSize="xx-large"
                  padding={9}
                  borderRadius={15}
                  onClick={handleHelp}
                  boxShadow={isHelp ? "0 0 20px #29C53F" : "none"}
                  _focus={{
                    outline: "none",
                  }}
                >
                  Get Help
                </Button>
              </VStack>
            </Box>
          </Box>
        </Box>

        {/* Conditionally render FormComponent based on screen width */}
        <Box
          flex={2}
          paddingRight={4}
          transform="scale(0.95)"
          _hover={{ transform: "scale(0.95)" }}
        >
          {isApply ? (
            <FormComponent isMobile={!isLargerThan768} />
          ) : (
            <UserStatus isMobile={!isLargerThan768} />
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default UserHomePage;
