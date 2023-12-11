import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";

interface UserStatusProps {
  isMobile: boolean;
}

const UserStatus: React.FC<UserStatusProps> = ({ isMobile }) => {
  const fontSize = isMobile ? "2xl" : "md";

  return (
    <Box p={10} shadow="xl" borderRadius="20" marginX={5}>
      <VStack spacing={5}>
        <h1>
          <b>Current Status</b>
        </h1>
        <FormControl id="nic">
          <FormLabel fontSize={fontSize}>NIC</FormLabel>
          <Input
            type="text"
            placeholder="Enter your NIC"
            defaultValue="123456789V"
            fontSize={fontSize}
            isReadOnly
          />
        </FormControl>
        <FormControl id="address">
          <FormLabel fontSize={fontSize}>Address</FormLabel>
          <Input
            type="text"
            placeholder="Enter your address"
            defaultValue="123 Main St"
            fontSize={fontSize}
            isReadOnly
          />
        </FormControl>
        <FormControl id="civilStatus">
          <FormLabel fontSize={fontSize}>Civil Status</FormLabel>
          <Input
            type="text"
            placeholder="Enter your civil status"
            defaultValue="Single"
            fontSize={fontSize}
            isReadOnly
          />
        </FormControl>
        <FormControl id="occupation">
          <FormLabel fontSize={fontSize}>Present Occupation</FormLabel>
          <Input
            type="text"
            placeholder="Enter your occupation"
            defaultValue="Software Developer"
            fontSize={fontSize}
            isReadOnly
          />
        </FormControl>
        <FormControl id="reason">
          <FormLabel fontSize={fontSize}>Reason</FormLabel>
          <Input
            type="text"
            placeholder="Enter the reason"
            defaultValue="Employment"
            fontSize={fontSize}
            isReadOnly
          />
        </FormControl>
        <FormControl id="nicPhoto">
          <FormLabel fontSize={fontSize}>Note from Grama Sevaka</FormLabel>
          <Input
            type="text"
            placeholder="Notes"
            defaultValue="Eligible for benefits"
            marginBottom={5}
            fontSize={fontSize}
            isReadOnly
          />
          <Input type="file" />
        </FormControl>
        <Button
          colorScheme="green"
          px={16}
          py={6}
          fontSize="3xl"
          _focus={{
            outline: "none",
          }}
        >
          Status
        </Button>
      </VStack>
    </Box>
  );
};

export default UserStatus;
