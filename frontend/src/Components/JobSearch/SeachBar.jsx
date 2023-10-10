import { Flex, FormControl, Input } from "@chakra-ui/react";
import React from "react";

const SeachBar = ({ inputValue, setInputValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Flex
      maxW={{ base: "78%", sm: "74%", md: "70%", lg: "85%" }}
      mx="auto"
      justify={"space-around"}
    >
      <form onSubmit={handleSubmit}>
        <FormControl
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          gap={4}
          w={["230px","325px", "450px"]}
        >
          <Input
          color={"black"}
            placeholder="Search Job By Programming Language"
            size="lg"
            border="2px solid black"
            type="text"
            textAlign={"center"}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </FormControl>
      </form>
    </Flex>
  );
};

export default SeachBar;
