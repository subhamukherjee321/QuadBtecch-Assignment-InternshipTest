import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ items }) => {
  console.log("items: ", items);
  return (
    <Box
      bgColor={"white"}
      p={8}
      borderRadius={"0.8rem"}
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      color={"#6E80A5"}
    >
      <Box
        w={"15%"}
        borderRadius={"0.8rem"}
        mt={-12}
        boxShadow="rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
      >
        <Image
          src={
            "https://github-jobs-api-fem.netlify.app/company-placeholder.jpg"
          }
          w={"100%"}
          h={"auto"}
          borderRadius={"0.8rem"}
        />
      </Box>
      <Flex justify={"space-between"} fontSize={"sm"} mt={4}>
        <Box>{items.workFromHome ? "Work From Home" : items.location}</Box>
        <Box>{items.companyType}</Box>
      </Flex>
      <Heading size={"md"} my={"0.2rem"} color={"black"}>
        {items.title}
      </Heading>
      <Box fontWeight={"bold"}>{items.company}</Box>
      <Box fontSize={"sm"} mt={2}>
        {items.description}
      </Box>
      <Box fontSize={"sm"} mt={2}>
        {items.salary}
      </Box>
      <Box mt={4}>
        <Link to={`/jobs/${items.id}`}>
          <Button>Read More</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default JobCard;
