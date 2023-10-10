import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PATH } from "../Redux/PathRedux/Path.ActionsTypes";

const ApplyViewApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverLetter: "",
    resume: null,
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.coverLetter ||
      !formData.resume
    ) {
      toast({
        title: "Fill All The Credentials",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Appiled for the job successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
      dispatch({ type: PATH, payload: false });
    }
  };

  return (
    <Box mt={6}>
      <form onSubmit={handleSubmit}>
        <VStack
          spacing={4}
          align="start"
          w={{ base: "90%", md: "70%", lg: "50%" }}
          bgColor={"white"}
          p={8}
          mx={"auto"}
          my={4}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          borderRadius={"md"}
        >
          <Heading
            textDecoration={"underline"}
            margin={"auto"}
            size={{ base: "md", md: "lg" }}
          >
            Job Application Form
          </Heading>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Cover Letter Note</FormLabel>
            <Textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows={4}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Resume (PDF only)</FormLabel>
            <Input
              type="file"
              name="resume"
              accept=".pdf"
              onChange={handleResumeUpload}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </form>
      <Heading size={"lg"} textAlign={"center"}>
        Preview your data below
      </Heading>
      {formData.name && (
        <Box
          mt={4}
          w={{ base: "90%", md: "70%", lg: "50%" }}
          mx={"auto"}
          bgColor={"white"}
          p={8}
          my={{ base: "4", md: "8" }}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          borderRadius={"md"}
        >
          <Heading size="lg">Submitted Data:</Heading>
          <Heading size={"md"} my={2}>
            Name : &nbsp; &nbsp; {formData.name}
          </Heading>
          <Heading size={"md"}>Email : &nbsp; &nbsp; {formData.email}</Heading>
          <Heading size={"md"} my={2}>
            Cover Letter Note: {formData.coverLetter}
          </Heading>
          {formData.resume && (
            <Box>
              <Heading size="md" mb={2}>
                Resume Preview:
              </Heading>
              <embed
                src={URL.createObjectURL(formData.resume)}
                type="application/pdf"
                width="100%"
                height="500px"
                controls="false"
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ApplyViewApplication;
