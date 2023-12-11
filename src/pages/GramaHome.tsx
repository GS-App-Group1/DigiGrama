import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
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
import Requests from "../components/Requests";
import RequestDetails from "../components/RequestDetails";
import { useState } from "react";
import MyRequest from "../data/data";

// Create an array of objects with the defined structure
export const requestsPending: MyRequest[] = [
  {
    name: "Request A",
    id: 1,
    date: "2023-01-01",
    requestNumber: 1001,
    status: "pending",
  },
  {
    name: "Request B",
    id: 2,
    date: "2023-01-02",
    requestNumber: 1002,
    status: "pending",
  },
  {
    name: "Request C",
    id: 3,
    date: "2023-01-03",
    requestNumber: 1003,
    status: "pending",
  },
  {
    name: "Request A",
    id: 1,
    date: "2023-01-01",
    requestNumber: 1001,
    status: "pending",
  },
  {
    name: "Request B",
    id: 2,
    date: "2023-01-02",
    requestNumber: 1002,
    status: "pending",
  },
  {
    name: "Request C",
    id: 3,
    date: "2023-01-03",
    requestNumber: 1003,
    status: "pending",
  },

  // ... more objects can be added here
];

// Create an array of objects with the defined structure
export const requestsCompleted: MyRequest[] = [
  {
    name: "Request D",
    id: 1,
    date: "2023-01-01",
    requestNumber: 10011,
    status: "completed",
  },
  {
    name: "Request E",
    id: 2,
    date: "2023-01-02",
    requestNumber: 10022,
    status: "completed",
  },
  {
    name: "Request F",
    id: 3,
    date: "2023-01-03",
    requestNumber: 10033,
    status: "completed",
  },
  // ... more objects can be added here
];

type UserHomePageProps = {
  signOut: () => void;
  username: string;
};

const UserHomePage = ({ signOut, username }: UserHomePageProps) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 1050px)");
  const [pendingList, setPendingList] = useState<MyRequest[]>(requestsPending);
  const [completedList, setCompletedList] =
    useState<MyRequest[]>(requestsCompleted);
  const [currentRequest, setCurrentRequest] = useState<MyRequest | null>(
    pendingList[0]
  );

  const handleClick = (request: MyRequest) => {
    setCurrentRequest(request);
  };

  const handleSwap = (request: MyRequest | null) => {
    if (request) {
      const updatedPendingList = pendingList.filter((r) => r.id !== request.id);
      const newRequest = { ...request, status: "completed" };
      const updatedCompletedList = [...completedList, newRequest];

      setPendingList(updatedPendingList);
      setCompletedList(updatedCompletedList);
      if (updatedPendingList.length > 0) {
        setCurrentRequest(updatedPendingList[0]);
      } else {
        setCurrentRequest(null);
      }
    }
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
              <PopoverHeader>{username}</PopoverHeader>
              <PopoverBody>
                {/* Add your user details here */}
                <Button
                  colorScheme="red"
                  _focus={{
                    outline: "none",
                  }}
                  onClick={signOut}
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
        justify="space-between"
        flexGrow={1}
      >
        {/* Requests */}
        <Box display="flex" flex={1} justifyContent="center">
          <Box padding={7} borderRadius={30}>
            <Requests
              isMobile={!isLargerThan768}
              selectedRequest={currentRequest}
              dataPending={pendingList}
              dataCompleted={completedList}
              clickHandler={handleClick}
            />
          </Box>
        </Box>

        <Box
          flex={isLargerThan768 ? 2 : 15}
          alignItems="center"
          paddingRight={4}
        >
          {/* <FormComponent /> */}
          <RequestDetails
            data={currentRequest}
            handleClick={() => handleSwap(currentRequest)}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default UserHomePage;
