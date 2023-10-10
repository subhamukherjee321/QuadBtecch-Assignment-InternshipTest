import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, resetLogin } from "../../../Redux/LoginRedux/Login.Actions";

const initState = {
  email: "",
  password: "",
};

const LoginMainFrom = () => {
  const [loginData, setLogindata] = useState(initState);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.login);
  const { status } = useSelector((store) => store.path);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogindata({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    const { email, password } = loginData;
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Sign Up Failed",
        description: "Fill all the Credentials",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else if (!email.includes("com")) {
      toast({
        title: "Sign Up Failed",
        description: "Please Enter A Valid Email",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else if (!email.includes("@")) {
      toast({
        title: "Sign Up Failed",
        description: "Please Enter A Valid Email",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else {
      dispatch(login(loginData));
    }
  };

  useEffect(() => {
    if (data.isAuth) {
      toast({
        title: "Log In Successful",
        status: "success",
        duration: 1900,
        isClosable: true,
        position: "top",
      });

      if (status) {
        setTimeout(() => {
          navigate("/application");
        }, 2100);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 2100);
      }
    } else if (data.isError) {
      toast({
        title: "Log In Failed",
        description: "Wrong Email Or Password",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else if (data.createAccount) {
      toast({
        title: "Log In Failed",
        description: "Don't Have Any Account With This Email Signup First",
        status: "error",
        duration: 1900,
        isClosable: true,
        position: "top",
      });

      setTimeout(() => {
        navigate("/signup");
      }, 2100);
    }

    dispatch(resetLogin());
  }, [toast, data.isAuth, data.isError, data.createAccount]);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        w={"85%"}
        mb={{ base: "0.3rem", md: "0.", lg: "0.5rem" }}
        color={"white"}
      >
        <Flex justify={"space-between"} flexDirection={"column"}>
          <Box pt={{ base: "1rem", md: "1rem", lg: "0.5rem" }}>
            <FormLabel>
              <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}>
                Email Address
              </Text>
            </FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter A Email"
              bg={"transparent"}
              size={{ base: "sm", md: "md", lg: "md" }}
              onChange={handleChange}
              value={loginData.email}
            />
          </Box>

          <Box pt={{ base: "1rem", md: "1rem", lg: "1rem" }}>
            <FormLabel>
              <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}>
                Password
              </Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                bg={"transparent"}
                size={{ base: "sm", md: "md", lg: "md" }}
                onChange={handleChange}
                value={loginData.password}
              />
              <InputRightElement width={["3rem", "3.8rem"]}>
                <Button
                  mt={["-0.3rem", "-0.35rem", "0.2rem"]}
                  onClick={() => setShow(!show)}
                  bg={"transparent"}
                  colorScheme={"transparent"}
                  color={"white"}
                  fontSize={["md", "xl"]}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"left"}
                >
                  {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Box>
            <Button
              mt={6}
              type="submit"
              w={"100%"}
              borderRadius={"1rem"}
              bg="teal"
              color="white"
              _hover={{
                bg: "#39B7FF",
                color: "white",
                border: "3px solid #39B7FF",
              }}
            >
              <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.1rem" }}>
                Log In
              </Text>
            </Button>
          </Box>
        </Flex>
      </FormControl>
    </form>
  );
};

export default LoginMainFrom;
