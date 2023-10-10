import {
  Box,
  Flex,
  Heading
} from "@chakra-ui/react";
import LoginLogout from "../LoginLogout";

const TopBar = () => {

  return (
    <Box
      bgColor={"#5964E0"}
      borderBottomLeftRadius={"5rem"}
      color={"white"}
      px={{ base: "1.5rem", sm: "4rem", md: "4rem", lg: "8rem" }}
      pt={{ base: "6", sm: "8", md: "12" }}
      pb={{ base: "3rem", sm: "4rem", md: "5rem" }}
    >
      <Flex justify={"space-between"}>
        <Heading size={"lg"}>QuadBJobs</Heading>

        <LoginLogout />
      </Flex>
    </Box>
  );
};

export default TopBar;
