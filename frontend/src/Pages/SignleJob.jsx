// 'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { async } from "q";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router";

export default function Simple() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  console.log("singleData: ", singleData);

  const getSingleData = async (id) => {
    const res = await fetch(`http://localhost:8080/jobs?id=${id}`);
    const data = await res.json();
    setSingleData(data);
  };

  useEffect(() => {
    getSingleData(id);
  }, []);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              "https://github-jobs-api-fem.netlify.app/company-placeholder.jpg"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {singleData[0]?.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {singleData[0]?.salary}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {singleData[0]?.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>
                    Work From Home :{" "}
                    {singleData[0]?.workFromHome ? "Yes" : "No"}
                  </ListItem>
                  <ListItem>
                    Company Type : {singleData[0]?.companyType}
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Programming Language :
                  </Text>{" "}
                  &nbsp; &nbsp;
                  {singleData[0]?.programmingLanguage}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Location :
                  </Text>{" "}
                  &nbsp; &nbsp;
                  {singleData[0]?.location}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Apply from site :
                  </Text>{" "}
                  &nbsp; &nbsp;
                  <Link href={singleData[0]?.applyLink}>
                    {singleData[0]?.applyLink}
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Apply Now
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
