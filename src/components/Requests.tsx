import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import Request from "./SmallRequest";
import MyRequest from "../data/data";

interface SmallRequestProps {
  obj: MyRequest;
  onClick: () => void;
  isSelected: boolean;
}

const SmallRequest: React.FC<SmallRequestProps> = ({
  obj,
  onClick,
  isSelected,
}) => {
  return <Request handleClick={onClick} data={obj} isSelected={isSelected} />;
};

interface PaginationProps {
  current: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  current,
  pageCount,
  onPageChange,
}) => {
  return (
    <HStack spacing={4}>
      <Button
        onClick={() => onPageChange(1)}
        isDisabled={current === 1}
        _focus={{
          outline: "none",
        }}
      >
        {"<<"} {/* Start */}
      </Button>
      <Button
        onClick={() => onPageChange(Math.max(current - 1, 1))}
        isDisabled={current === 1}
        _focus={{
          outline: "none",
        }}
      >
        {"<"} {/* Previous */}
      </Button>
      <Button
        onClick={() => onPageChange(Math.min(current + 1, pageCount))}
        isDisabled={current === pageCount}
        _focus={{
          outline: "none",
        }}
      >
        {">"} {/* Next */}
      </Button>
      <Button
        onClick={() => onPageChange(pageCount)}
        isDisabled={current === pageCount}
        _focus={{
          outline: "none",
        }}
      >
        {">>"} {/* End */}
      </Button>
    </HStack>
  );
};

interface UserHomePageProps {
  isMobile: boolean;
  selectedRequest: MyRequest | null;
  dataPending: MyRequest[];
  dataCompleted: MyRequest[];
  clickHandler: (request: MyRequest) => void;
}

// add a prop boolean called isMobile
const UserHomePage: React.FC<UserHomePageProps> = ({
  isMobile,
  dataPending,
  dataCompleted,
  clickHandler,
  selectedRequest,
}) => {
  const scaleValue = isMobile ? "scale(2.2)" : "scale(1.1)";
  const marginT = isMobile ? 60 : 0;
  const itemsPerPage = isMobile ? 3 : 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentCategory, setCurrentCategory] = useState<
    "pending" | "completed"
  >("pending");

  const handleClick = (request: MyRequest) => {
    clickHandler(request);
  };

  const data: Record<"pending" | "completed", MyRequest[]> = {
    pending: dataPending,
    completed: dataCompleted,
  };

  const pageCount = Math.ceil(data[currentCategory].length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentData = data[currentCategory].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box
      marginBottom={isMobile ? 60 : 80}
      marginTop={marginT}
      padding={7}
      borderRadius={30}
      boxShadow="xl"
      transform={scaleValue}
      _hover={{ transform: scaleValue }}
    >
      <VStack spacing={3}>
        <HStack spacing={7}>
          <Button
            colorScheme={currentCategory === "pending" ? "red" : "gray"}
            onClick={() => setCurrentCategory("pending")}
            _focus={{
              outline: "none",
            }}
          >
            Pending
          </Button>
          <Button
            colorScheme={currentCategory === "completed" ? "green" : "gray"}
            onClick={() => setCurrentCategory("completed")}
            _focus={{
              outline: "none",
            }}
          >
            Completed
          </Button>
        </HStack>
        <Box>
          <Text fontSize={25}>
            <b>
              {currentCategory.charAt(0).toUpperCase() +
                currentCategory.slice(1)}
            </b>
          </Text>
        </Box>
        <SimpleGrid columns={1} spacing={5}>
          {currentData.map((item, index) => (
            <Box
              key={index}
              transform="scale(1)"
              _hover={{ transform: "scale(1)" }}
            >
              <SmallRequest
                onClick={() => handleClick(item)}
                obj={item}
                isSelected={
                  selectedRequest?.requestNumber === item.requestNumber
                }
              />
            </Box>
          ))}
          {currentData.length === 0 && (
            <Text fontSize={20}>No requests to show</Text>
          )}
        </SimpleGrid>
        {pageCount > 1 && (
          <Pagination
            current={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageChange}
          />
        )}
      </VStack>
    </Box>
  );
};

export default UserHomePage;
