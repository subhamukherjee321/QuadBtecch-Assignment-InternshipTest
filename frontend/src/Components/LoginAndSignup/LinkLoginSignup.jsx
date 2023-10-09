import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import {Link, useNavigate} from "react-router-dom";

const LinkLoginSignup = ({des, link, to}) => {
  return (
    <Box
        w={"100%"}
        mt={"0.7rem"}
        style={{ fontWeight: "500" }}
        color={"white"}
      >
        
        <Text fontSize={{ base: "0.9rem", md: "1rem", lg: "1.1rem" }}>{des}</Text>
        <Text color={"#50B6FF"} textDecoration={"underline"} fontSize={{ base: "0.9rem", md: "1rem", lg: "1.1rem" }}>
          <Link to={to}>{link}</Link>
        </Text>
      </Box>
  )
}

export default LinkLoginSignup