import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ handlePage, page, text }) => {
  return (
    <Flex justify={"center"} align={"center"} my={10} gap={4}>
      <Button
        bg={"gray.900"}
        color={"white"}
        _hover={{ bg: "gray.600" }}
        _active={{ bg: "gray.800" }}
        onClick={() => handlePage(-1)}
      >
        Previous
      </Button>
      <Button
        bg={"gray.900"}
        _hover={{ bg: "gray.900" }}
        color={"white"}
        isDisabled
      >
        {page}
      </Button>
      <Button
        bg={"gray.900"}
        color={"white"}
        _hover={{ bg: "gray.600" }}
        _active={{ bg: "gray.800" }}
        onClick={() => handlePage(1)}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
