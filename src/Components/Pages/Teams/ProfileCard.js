import React, { useState } from "react";
import { Box, Text, Image, Grid, GridItem, Button, VStack } from "@chakra-ui/react";
import Modal_Page from "./Modal_Page"; // Assuming Modal_Page is a modal component for displaying the full content.

export default function ProfileCard({ data }) {
  const [isTextTruncated, setIsTextTruncated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(2, auto)" }}
        templateRows={{ base: "repeat(2, auto)", lg: "repeat(4, auto)" }}
        gap={4}
        maxW="40rem"
        mx="auto"
        p={5}
      >
        {/* Image Box */}
        <GridItem
          colSpan={{ base: 1, lg: 1 }}
          rowSpan={{ base: 1, lg: 4 }}
        >
          <Image
            src={data.profilePicture} // Replace with your image source
            alt="Profile Image"
            maxW={{ base: "10rem", md: "20rem", lg: "9rem" }}
            height={{ base: "15rem", md: "", lg: "15rem" }}
            objectFit="cover"
            mx="auto"
          />
        </GridItem>

        {/* Name Text */}
        <GridItem
          colSpan={{ base: 1, lg: 1 }}
          rowSpan={{ base: 1, lg: 1 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          pt="1rem"
        > <VStack align="left">
          <Text fontSize="md" fontWeight="bold">
            {data.name}
          </Text>
          <Text>
            {data.label}
          </Text>
          </VStack>
        </GridItem>

        {/* Description Text */}
        <GridItem colSpan={{ base: 2, lg: 1 }} rowSpan={{ base: 1, lg: 4 }}>
          <Box position="relative" overflow="hidden">
            <Text
              fontSize="md"
              noOfLines={5} // Limit the text to 5 lines
              onMouseEnter={() => setIsTextTruncated(true)} // Detect if text is truncated
              textAlign="justify"
            >
              {data.description}
            </Text>

            {/* Show More Button */}
            {isTextTruncated && (
              <Button
                onClick={() => setIsModalOpen(true)} // Set state to open the modal
                variant="link"
                size="sm"
                color="teal"
                mt={2}
              >
                Show More
              </Button>
            )}
          </Box>
        </GridItem>
      </Grid>

      {/* Modal for Full Description */}
      {isModalOpen && (
        // eslint-disable-next-line react/jsx-pascal-case
        <Modal_Page
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={data}
        />
      )}
    </>
  );
}
