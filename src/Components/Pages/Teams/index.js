/** @format */

import React from "react";
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Image,
  Link,
  Stack,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import teamData from "../../../data/team.json"; // Assume the JSON file is located here

const Team = () => {
  // Group the team members by their "group" attribute
  const groupedTeamMembers = teamData.reduce((acc, member) => {
    if (!acc[member.group]) {
      acc[member.group] = [];
    }
    acc[member.group].push(member);
    return acc;
  }, {});

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={6} color="teal.600">
          Current Team
        </Heading>

        {/* Iterate over each group and display the team members */}
        {Object.keys(groupedTeamMembers).map((group) => (
          <Box key={group} mb={10}>
            <Text fontSize="2xl" fontWeight="bold" mb={4} color="gray.700">
              {group}
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {groupedTeamMembers[group].map((member, index) => (
                <Box
                  key={index}
                  p={5}
                  shadow="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  bg="white"
                >
                  <Flex direction={{ base: "column", md: "row" }}>
                    <Image
                      src={member.image || "https://via.placeholder.com/150"}
                      alt={member.name}
                      boxSize="150px"
                      objectFit="cover"
                      borderRadius="full"
                      mr={{ md: 6 }}
                      mb={{ base: 4, md: 0 }}
                    />
                    <Stack spacing={3} flex="1">
                      <Text fontSize="lg" fontWeight="bold" color="teal.800">
                        {member.name}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        {member.label}
                      </Text>
                      <Text fontSize="sm" color="gray.600" noOfLines={3}>
                        {member.description}
                      </Text>
                      <Box mt={3}>
                        {member.github && (
                          <Link
                            href={member.github}
                            isExternal
                            mr={3}
                            color="gray.700"
                          >
                            <FaGithub size="20px" />
                          </Link>
                        )}
                        {member.linkedin && (
                          <Link
                            href={member.linkedin}
                            isExternal
                            mr={3}
                            color="gray.700"
                          >
                            <FaLinkedin size="20px" />
                          </Link>
                        )}
                        {member.googleScholar && (
                          <Link
                            href={member.googleScholar}
                            isExternal
                            mr={3}
                            color="gray.700"
                          >
                            <FaGoogle size="20px" />
                          </Link>
                        )}
                      </Box>
                      <Button
                        mt={2}
                        variant="link"
                        color="teal.500"
                        _hover={{ textDecoration: "underline" }}
                      >
                        Show more
                      </Button>
                    </Stack>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Team;
