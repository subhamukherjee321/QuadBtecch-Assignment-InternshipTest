import React, { useState } from "react";

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
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const initState = {
  email: "",
  password: "",
};

const LoginMainFrom = () => {
  const [loginData, setLogindata] = useState(initState);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogindata({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

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
