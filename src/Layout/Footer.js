/** @format */

import { Box, Text, Link, Stack, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Box as="footer" bg="gray.700" color="white" py={6}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.xl"
        mx="auto"
        px={4}
      >
        {/* Footer Links with Icons */}
        <Stack direction="row" spacing={6}>
          <Link href="mailto:subasish@txstate.edu" isExternal fontSize="2xl">
            <Icon as={FaEnvelope} mr={2} color="white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/subasishdas/"
            isExternal
            fontSize="2xl"
          >
            <Icon as={FaLinkedin} mr={2} color="white" />
          </Link>
          <Link href="https://github.com/subasish" isExternal fontSize="2xl">
            <Icon as={FaGithub} mr={2} color="white" />
          </Link>
        </Stack>

        {/* Copyright Information */}
        <Text textAlign={{ base: "center", md: "right" }}>
          &copy; {new Date().getFullYear()} AIT Lab. All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
}
