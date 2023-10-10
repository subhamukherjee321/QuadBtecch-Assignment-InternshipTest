import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../Redux/GetJobRedux/GetJobActions";

const Pagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((store) => store.getData);
  
  return (
    <Flex justify={"center"} align={"center"} my={10} gap={4}>
      <Button
        bg={"gray.900"}
        color={"white"}
        _hover={{ bg: "gray.600" }}
        _active={{ bg: "gray.800" }}
        onClick={() => dispatch(setPage(-1))}
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
        onClick={() => dispatch(setPage(1))}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
