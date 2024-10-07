/** @format */
import React from "react";
import { Box, Text, Stack, Image, Link } from "@chakra-ui/react";

const ResearchPaperItem = ({ title, total_citations, year, url }) => {
  return (
    <Box
      p={3}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      bg="white" // Light mode background
      _hover={{ shadow: "lg", transform: "translateY(-10px)" }} // Hover effect for the card
      transition="all 0.3s ease"
      height="100%" // Ensure card fills height in grid
      display="flex"
      flexDirection="column"
      justifyContent="space-between" // Push content to the top and bottom
    >
      {/* Card Image Placeholder */}
      <Box overflow="hidden" borderRadius="md">
        <Image
          src="/img/research-default.jpg" // Placeholder image
          alt="Research Paper Thumbnail"
          width="100%"
          height="200px"
          objectFit="cover"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.05)" }} // Hover transition effect
        />
      </Box>

      {/* Paper Title */}
      <Stack spacing={3} mt={4} flex="1">
        <Link href={url} isExternal _hover={{ textDecoration: "none" }}>
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="primary"
            _hover={{ color: "blue.600" }} // Hover effect for text
          >
            {title}
          </Text>
        </Link>
      </Stack>

      {/* Citations and Year in one line */}
      <Stack
        direction="row"
        justifyContent="space-between"
        mt={4}
        pt={2}
        borderTop="1px solid"
        borderColor="gray.200"
      >
        <Text fontSize="sm" color="gray.600">
          Citations: {total_citations || "N/A"}
        </Text>
        <Text fontSize="sm" color="gray.600">
          Year: {year}
        </Text>
      </Stack>
    </Box>
  );
};

export default ResearchPaperItem;
