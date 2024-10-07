import { Modal,ModalOverlay, ModalContent, ModalHeader, Text, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

export default function Modal_Page({ data, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "lg", md: "lg", lg: "3xl", xl: "5xl" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {data.name} - {data.label}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="md" textAlign="justify">
            {data.description}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
