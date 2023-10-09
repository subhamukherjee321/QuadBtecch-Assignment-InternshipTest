import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const FormHeading = ({ title }) => {
  return (
    <Box w={"90%"} mb={"0.7rem"} align={"center"} color={"#81E6D2"}>
      <Heading
        fontSize={{
          base: "1.5rem",
          sm: "2rem",
          md: "1.9rem",
          lg: "2.2rem",
          xl: "2.2rem",
          "2xl": "2.3rem",
        }}
        pt={{ base: "1rem", md: "1.7rem", lg: "2rem" }}
      >
        {title}
      </Heading>
    </Box>
  );
};

export default FormHeading;
