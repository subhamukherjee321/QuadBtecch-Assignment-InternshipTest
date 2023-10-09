import { Box } from "@chakra-ui/react";
import React from "react";
import FormHeading from "../Components/LoginAndSignup/FormHeading";
import LinkLoginSignup from "../Components/LoginAndSignup/LinkLoginSignup";
import SignupMainFrom from "../Components/LoginAndSignup/Signup/SignupMainForm";

const Signup = () => {
  return (
    <Box
      justify={"center"}
      align={"center"}
      pt="2rem"
      pb={{ base: "4rem", md: "6rem", lg: "8rem" }}
      backgroundImage="url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80')"
      backgroundPosition={{ base: "center", md: "center", lg: "contain" }}
      backgroundRepeat="no-repeat"
      minH={"100vh"}
    >
      <Box
        mt={12}
        w={{ base: "80%", md: "50%", lg: "35%" }}
        bg={"rgba(0,0,0,0.5)"}
        borderRadius="1rem"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        pb={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }}
      >
        <FormHeading title={"SIGN UP"} />

        <SignupMainFrom />

        <LinkLoginSignup
          des={"Already a member?"}
          link={"Sign in"}
          to={"/login"}
        />
      </Box>
    </Box>
  );
};

export default Signup;
