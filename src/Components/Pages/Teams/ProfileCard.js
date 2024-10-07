import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Button,
  VStack,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import Modal_Page from "./Modal_Page";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function ProfileCard({ data }) {
  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    website: FaGlobe,
    googlescholar: SiGooglescholar,
  };
  // Centralized color mapping
  const colorMap = {
    github: "#333",
    linkedin: "#0e76a8",
    website: "#1a202c",
    googlescholar:"#333",
  };

  const [profilePicture, setProfilePicture] = useState(data.profilePicture);

  // Update the profile picture path based on the `imageProfile` URL
  useEffect(() => {
    if (data.profilePicture) {
      const localImagePath = `${process.env.PUBLIC_URL}/profile_pictures/${data.profilePicture}.jpg`;
      setProfilePicture(localImagePath);
    }
  }, [data.profilePicture]);

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
        <GridItem colSpan={{ base: 1, lg: 1 }} rowSpan={{ base: 1, lg: 4 }}>
          <Image
            src={profilePicture} //make sure the {data.profilepicture name is same with the image name}
            alt={data.profilePicture}
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
        >
          {" "}
          <VStack align="left">
            <Text fontSize="md" fontWeight="bold">
              {data.name}
            </Text>
            <Text fontSize="sm">{data.label}</Text>
          </VStack>
        </GridItem>

        {/* Description Text */}
        <GridItem colSpan={{ base: 2, lg: 1 }} rowSpan={{ base: 1, lg: 4 }}>
          <Box position="relative" overflow="hidden">
            <Text
              fontSize="md"
              noOfLines={3} // Limit the text to 3 lines
              textAlign="justify"
            >
              {data.description}
            </Text>
            {/* Show the icons */}
            {data.links?.length > 0 && (
              <HStack pt="0.3rem" spacing={2} mt={3}>
                {data.links.map((link, index) => {
                  const IconComponent = iconMap[link.icon];
                  const iconColor = colorMap[link.icon];

                  return (
                    <Link href={link.href} isExternal key={index}>
                      <Icon
                        boxSize="1rem"
                        as={IconComponent}
                        color={iconColor}
                      />
                    </Link>
                  );
                })}
              </HStack>
            )}

            {/* Show More Button */}
            <Button
              onClick={() => setIsModalOpen(true)} // Set state to open the modal
              variant="link"
              size="sm"
              color="teal"
              pt="1rem"
            >
              Show More
            </Button>
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
