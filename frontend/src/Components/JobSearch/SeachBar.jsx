import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import React from "react";

const SeachBar = () => {
  return (
    <Box maxW={{ base: "78%", sm: "74%", md: "70%", lg: "85%" }} mx="auto">
      <form>
        <FormControl
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          gap={4}
        >
          <Input
            placeholder="Type a Programming Language Name"
            size="md"
            border="1px solid black"
            type="text"
            textAlign={"center"}
          />
          <Button colorScheme="blue" size="md" type="submit">
            Button
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default SeachBar;
