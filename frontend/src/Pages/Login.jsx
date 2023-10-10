import { Box, Text } from "@chakra-ui/react";
import React from "react";
import FormHeading from "../Components/LoginAndSignup/FormHeading";
import LinkLoginSignup from "../Components/LoginAndSignup/LinkLoginSignup";
import LoginMainFrom from "../Components/LoginAndSignup/Login/LoginMainFrom";

const Login = () => {
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
        w={{ base: "80%", md: "60%", lg: "40%", xl: "32%" }}
        bg={"rgba(0,0,0,0.5)"}
        borderRadius="1rem"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        pb={{ base: "1.7rem", md: "2rem", lg: "3rem" }}
      >
        <FormHeading title={"LOG IN"} />

        <LoginMainFrom />

        <Box w={"10%"} align={"center"} color={"#8A8377"}>
          <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.1rem" }}>
            Or
          </Text>
        </Box>

        <LinkLoginSignup
          des={"New Here?"}
          link={"Create an account."}
          to={"/signup"}
        />
      </Box>
    </Box>
  );
};

export default Login;
