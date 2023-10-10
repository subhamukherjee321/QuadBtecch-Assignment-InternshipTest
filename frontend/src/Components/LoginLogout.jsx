import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPersonFill } from "react-icons/bs";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { logoutFunc } from "../Redux/LoginRedux/Login.Actions";

const LoginLogout = () => {
  const [accountHover, setAccountHover] = useState(false);
  const { data } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  return (
    <Flex
      justify={"center"}
      align={"center"}
      gap={4}
      fontSize={"1.2rem"}
      fontWeight={"bold"}
      position={"relative"}
    >
      <Button
        leftIcon={<BsFillPersonFill />}
        colorScheme="teal"
        variant="solid"
        onMouseOver={() => setAccountHover(true)}
        onMouseOut={() => setAccountHover(false)}
      >
        {data || "Account"}
      </Button>

      {accountHover && (
        <Box
          position={"absolute"}
          top={10}
          onMouseOver={() => setAccountHover(true)}
          onMouseOut={() => setAccountHover(false)}
        >
          {data ? (
            <Button colorScheme="teal" onClick={() => dispatch(logoutFunc())}>
              Logout
            </Button>
          ) : (
            <Box p={"0.7rem"} bgColor={"rgba(0,0,0, 0.5)"} textAlign={"center"} borderRadius={"md"}>
              <Link to={"/login"}>
                <Button colorScheme="teal" mb={"0.7rem"}>Login</Button>
              </Link>
              <Link to={"/signup"}>
                <Button colorScheme="teal">Signup</Button>
              </Link>
            </Box>
          )}
        </Box>
      )}
    </Flex>
  );
};

export default LoginLogout;
