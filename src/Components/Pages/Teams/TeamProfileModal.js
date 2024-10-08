/** @format */

import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { FaResearchgate, FaOrcid } from "react-icons/fa";

const TeamProfileModal = ({ isOpen, onClose, member }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader>{member?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold" mb={2}>
            {member?.label}
          </Text>
          <Text mb={4}>{member?.description}</Text>

          {/* Links Section */}
          <HStack spacing={3} mt={3} align="center">
            {member.email && (
              <Link href={`mailto:${member.email}`} isExternal color="gray.700">
                <FaEnvelope size="20px" />
              </Link>
            )}
            {member.linkedin && (
              <Link href={member.linkedin} isExternal color="gray.700">
                <FaLinkedin size="20px" color="#0e76a8" />
              </Link>
            )}
            {member.github && (
              <Link href={member.github} isExternal color="gray.700">
                <FaGithub size="20px" color="#333" />
              </Link>
            )}
            {member.googleScholar && (
              <Link href={member.googleScholar} isExternal color="gray.700">
                <SiGooglescholar size="20px" />
              </Link>
            )}
            {member.researchGate && (
              <Link href={member.researchGate} isExternal color="gray.700">
                <FaResearchgate size="20px" color="#00ccbb" />
              </Link>
            )}
            {member.orcid && (
              <Link href={member.orcid} isExternal color="gray.700">
                <FaOrcid size="20px" color="#A7CF36" />
              </Link>
            )}
            {member.twitter && (
              <Link href={member.twitter} isExternal color="gray.700">
                <FaTwitter size="20px" color="#1DA1F2" />
              </Link>
            )}
            {member.websites &&
              member.websites.length > 0 &&
              member.websites.map((website, index) => (
                <Link key={index} href={website} isExternal color="gray.700">
                  <FaGlobe size="20px" />
                </Link>
              ))}
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" variant="outline" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TeamProfileModal;
