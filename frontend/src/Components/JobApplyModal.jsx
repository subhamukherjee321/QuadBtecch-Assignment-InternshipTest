import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
} from "@chakra-ui/react";
import React from "react";

const JobApplyModal = ({ isOpen, onClose, initialRef, finalRef }) => {
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input ref={initialRef} placeholder="Type Name Here" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Type Email Here" type="email" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Cover Letter Note</FormLabel>
            <Textarea placeholder="Type Note Here" size="sm" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Resume (PDF Format)</FormLabel>
            <Input type="file" placeholder="Type Note Here" size="sm" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default JobApplyModal;
