import { Modal,ModalOverlay, ModalContent, ModalHeader, Text, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

export default function Modal_Page({ data, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{base:"lg", md:"lg"}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {data.name} - {data.label}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="md">{data.description}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
