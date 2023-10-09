import { Box, Button, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import ToggleSwitch from "./ToggleSwitch/ToggleBtn";

const TopBar = () => {
  const [isTabletOrSmaller] = useMediaQuery("(max-width: 480px)");
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
        <Heading size={"lg"}>DevJobs</Heading>
        <Flex gap={4} fontSize={"1.5rem"}>
          {isTabletOrSmaller ? null : <BsSunFill />}
          <ToggleSwitch />
          {isTabletOrSmaller ? null : <BsFillMoonFill />}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopBar;
