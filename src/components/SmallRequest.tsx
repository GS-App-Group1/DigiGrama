import React from "react";
import { Box, VStack, Stack, Text } from "@chakra-ui/react";
import MyRequest from "../data/data";

interface RequestProps {
  handleClick: () => void; // assuming handleClick is a function with no arguments
  data: MyRequest;
  isSelected: boolean;
}

const Request: React.FC<RequestProps> = ({ handleClick, data, isSelected }) => {
  return (
    <Box
      borderRadius="40"
      p={0}
      bg="green.300"
      cursor="pointer"
      onClick={handleClick}
      _hover={{
        boxShadow: "0 0 10px 0 rgba(100, 255, 255, 1)", // This creates a glow effect
      }}
      boxShadow={
        isSelected
          ? "0 0 10px 0 rgba(100, 255, 255, 1)"
          : "0 0 0px 0 rgba(100, 255, 255, 1)"
      }
    >
      <Stack direction={"row"} spacing={2} justify="center">
        <Box borderRadius="40" p={1} bg="green.200">
          <VStack spacing={0.1}>
            <Text fontSize="small" marginX={2}>
              <b>{data.date}</b>
            </Text>
            <Text fontSize="small" marginX={2}>
              {data.requestNumber}
            </Text>
          </VStack>
        </Box>
        <Box borderRadius="40" p={1} bg="green.200">
          <VStack spacing={0.1}>
            <Text fontSize="small" marginX={2}>
              <b>{data.name}</b>
            </Text>
            <Text fontSize="small" marginX={2}>
              {data.id}
            </Text>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Request;
