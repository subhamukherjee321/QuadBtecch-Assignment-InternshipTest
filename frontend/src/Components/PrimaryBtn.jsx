import { Button } from "@chakra-ui/button";
import React from "react";

const PrimaryBtn = ({type, text}) => {
  return (
    <Button
      bgColor={"#5964E0"}
      color={"white"}
      p={"0.5rem 2rem"}
      _hover={{ bgColor: "#6771E3" }}
      _active={{ bgColor: "#5964E0" }}
      size="md"
      type={type && "submit"}
    >
      {text}
    </Button>
  );
};

export default PrimaryBtn;
