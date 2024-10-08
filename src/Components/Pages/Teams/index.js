/** @format */

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import framer-motion
import TeamProfileCard from "./TeamProfileCard";
import TeamProfileModal from "./TeamProfileModal";
import teamData from "../../../data/team.json";
import alumniData from "../../../data/alumni.json";
import collaboratorsData from "../../../data/collaborator.json";

// Motion wrapper for Chakra UI Box
const MotionGridItem = motion(GridItem);

// Animation variant for staggered slide-in effect
const cardVariants = {
  hidden: { opacity: 0, x: 100 }, // Start off-screen (right)
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6 }, // Delay each card for stagger effect
  }),
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        {/* Current Team Section */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={10} mb={12}>
          <GridItem>
            <Heading as="h1" size="2xl" mb={6} color="blue.600">
              Current Team
            </Heading>
          </GridItem>
          <GridItem>
            {teamData.map((member, index) => (
              <MotionGridItem
                key={index}
                custom={index} // Custom index for staggered effect
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <TeamProfileCard member={member} onShowMore={handleShowMore} />
              </MotionGridItem>
            ))}
          </GridItem>
        </Grid>

        {/* Collaborators Section */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={10} mb={12}>
          <GridItem>
            <Heading as="h1" size="2xl" mb={6} color="blue.600">
              Collaborators
            </Heading>
          </GridItem>
          <GridItem>
            {collaboratorsData.map((member, index) => (
              <MotionGridItem
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <TeamProfileCard member={member} onShowMore={handleShowMore} />
              </MotionGridItem>
            ))}
          </GridItem>
        </Grid>

        {/* Alumni Section with Grid Layout */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={10} mb={12}>
          <GridItem>
            <Heading as="h1" size="2xl" mb={6} color="blue.600">
              Alumni
            </Heading>
          </GridItem>
          <GridItem>
            {alumniData.map((alumni, index) => (
              <Box
                key={index}
                borderBottom="1px solid"
                borderColor="gray.200"
                pb={2}
                pt={2}
              >
                <Text fontWeight="bold" fontSize="lg" color="gray.600">
                  {alumni.name}
                  <Text as="span" fontWeight="300" color="gray.500">
                    {" "}
                    - {alumni.label}
                    {alumni.subject.length > 0 && `, ${alumni.subject}`}
                    {alumni.duration.length > 0 && ` (${alumni.duration})`}
                  </Text>
                </Text>
              </Box>
            ))}
          </GridItem>
        </Grid>

        {/* Modal */}
        {selectedMember && (
          <TeamProfileModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            member={selectedMember}
          />
        )}
      </Container>
    </Box>
  );
};

export default Team;
