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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../Redux/SignupRedux/Signup.Actions";
import { useNavigate } from "react-router-dom";

const initState = {
  username: "",
  email: "",
  password: "",
  password2: "",
};

const SignupMainFrom = () => {
  const [signupData, setSignupData] = useState(initState);
  const [userData, setUserData] = useState([]);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const getUsers = async () => {
    const res = await fetch("https://subha-json.vercel.app/auth");
    const data = await res.json();
    setUserData(data);
  };

  const matchUser = () => {
    return userData?.filter((ele) => ele.email === signupData.email);
  };

  console.log("match", matchUser());

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let { username, email, password, password2 } = signupData;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!username || !email || !password || !password2) {
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
    } else if (!/\d/.test(password)) {
      toast({
        title: "Sign Up Failed",
        description: "Password must have 1 Number (0-9)",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else if (!/[A-Z]/.test(password)) {
      toast({
        title: "Sign Up Failed",
        description: "Password must have 1 Uppercase Letter (A-Z)",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else if (!/[a-z]/.test(password)) {
      toast({
        title: "Sign Up Failed",
        description: "Password must have 1 Lowercase Letter (a-z)",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else if (password.length < 8) {
      toast({
        title: "Sign Up Failed",
        description: "Password minimum 8 Characters needed",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else if (!specialChars.test(password)) {
      toast({
        title: "Sign Up Failed.",
        description:
          "Password must have 1 special character (from standard US keyboard)",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else if (password !== password2) {
      toast({
        title: "Sign Up Failed.",
        description: "Password is not Matched",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else {
      if (matchUser().length > 0) {
        toast({
          title: "User already exist",
          description: "Re-direct to login",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast({
          title: "Sign Up Success.",
          description: "Re-direct to login",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        setSignupData(initState);
        dispatch(signup(signupData));

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl w={"85%"}>
        <Flex
          justify={"space-between"}
          flexDirection={"column"}
          color={"white"}
        >
          {/* Name Input */}
          <Box>
            <FormLabel>
              <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}>
                Username
              </Text>
            </FormLabel>
            <Input
              type="text"
              name="username"
              placeholder="Enter A Username"
              bg={"transparent"}
              size={{ base: "sm", md: "md", lg: "md" }}
              value={signupData.username}
              onChange={handleChange}
            />
          </Box>

          {/* Email Address */}
          <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
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
              value={signupData.email}
              onChange={handleChange}
            />
          </Box>

          {/* First Password */}
          <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
            <FormLabel>
              <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}>
                Password
              </Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="password"
                type={show1 ? "text" : "password"}
                placeholder="Enter password"
                bg={"transparent"}
                size={{ base: "sm", md: "md", lg: "md" }}
                value={signupData.password}
                onChange={handleChange}
              />
              <InputRightElement
                width="4.5rem"
                display={"flex"}
                align={"center"}
                justify={"center"}
              >
                <Button
                  mt={"0.2rem"}
                  onClick={() => setShow1(!show1)}
                  fontSize={"12px"}
                  bg={"transparent"}
                  colorScheme={"transparent"}
                  color={"white"}
                >
                  {show2 ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          {/* Confirm Password */}
          <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
            <FormLabel>
              <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1rem" }}>
                Confirm Password
              </Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="password2"
                type={show2 ? "text" : "password"}
                placeholder="Re-Enter Password"
                bg={"transparent"}
                size={{ base: "sm", md: "md", lg: "md" }}
                value={signupData.password2}
                onChange={handleChange}
              />
              <InputRightElement
                width="4.5rem"
                display={"flex"}
                align={"center"}
                justify={"center"}
              >
                <Button
                  mt={"0.2rem"}
                  onClick={() => setShow2(!show2)}
                  fontSize={"12px"}
                  bg={"transparent"}
                  colorScheme={"transparent"}
                  color={"white"}
                >
                  {show2 ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Box pt={{ base: "1.5rem", md: "1.5rem", lg: "1.3rem" }}>
            <Button
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
                CREATE ACCOUNT
              </Text>
            </Button>
          </Box>
        </Flex>
      </FormControl>
    </form>
  );
};

export default SignupMainFrom;
