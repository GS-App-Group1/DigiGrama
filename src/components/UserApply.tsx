import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";

interface FormComponentProps {
  isMobile: boolean;
}

const FormComponent: React.FC<FormComponentProps> = ({ isMobile }) => {
  const fontSize = isMobile ? "2xl" : "md";

  return (
    <Box p={10} shadow="xl" borderRadius="20" marginX={5}>
      <VStack spacing={5}>
        <Text as="h1" fontWeight="bold">
          Application
        </Text>
        <FormControl id="nic">
          <FormLabel fontSize={fontSize}>
            <b>NIC</b>
          </FormLabel>
          <Input type="text" placeholder="Enter your NIC" fontSize={fontSize} />
        </FormControl>
        <FormControl id="address">
          <FormLabel fontSize={fontSize}>
            <b>Address</b>
          </FormLabel>
          <Input
            type="text"
            placeholder="Enter your address"
            fontSize={fontSize}
          />
        </FormControl>
        <FormControl id="civilStatus">
          <FormLabel fontSize={fontSize}>
            <b>Civil Status</b>
          </FormLabel>
          <Input
            type="text"
            placeholder="Enter your civil status"
            fontSize={fontSize}
          />
        </FormControl>
        <FormControl id="occupation">
          <FormLabel fontSize={fontSize}>
            <b>Present Occupation</b>
          </FormLabel>
          <Input
            type="text"
            placeholder="Enter your occupation"
            fontSize={fontSize}
          />
        </FormControl>
        <FormControl id="reason">
          <FormLabel fontSize={fontSize}>
            <b>Reason</b>
          </FormLabel>
          <Input
            type="text"
            placeholder="Enter the reason"
            fontSize={fontSize}
          />
        </FormControl>
        <FormControl id="nicPhoto">
          <FormLabel fontSize={fontSize}>
            <b>Upload NIC Photo</b>
          </FormLabel>
          <Input type="file" fontSize={fontSize} />
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
          Apply
        </Button>
      </VStack>
    </Box>
  );
};

export default FormComponent;
