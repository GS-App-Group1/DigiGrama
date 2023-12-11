import { Box, Button, Text } from "@chakra-ui/react";
import MyRequest from "../data/data";

// Define a type for the props
type RequestDetailsProps = {
  data: MyRequest | null;
  handleClick: () => void;
};

// Update the function to accept the props object with 'data' property
function RequestDetails({ data, handleClick }: RequestDetailsProps) {
  return (
    <>
      {data ? (
        <Box padding={7} margin={7} borderRadius={40} boxShadow="xl">
          <Text>Request Status: {data.status}</Text>
          <Text>Request ID: {data.id}</Text>
          <Text>Request Name: {data.name}</Text>
          <Text>Request Date: {data.date}</Text>
          <Text>Request Number: {data.requestNumber}</Text>
          {data.status === "pending" ? (
            <Button
              onClick={handleClick}
              _focus={{
                outline: "none",
              }}
            >
              accept
            </Button>
          ) : null}
        </Box>
      ) : (
        <Box bgColor="red">
          <Text>No requests</Text>
        </Box>
      )}
    </>
  );
}

export default RequestDetails;
