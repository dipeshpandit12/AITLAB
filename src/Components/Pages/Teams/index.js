import ProfileCard from "./ProfileCard";
import { Heading, Text, Box, Link, HStack, SimpleGrid } from "@chakra-ui/react";
import Students_Datas from "../../../Datas/Students_Datas.json";
import { useState } from "react";

export default function Teams() {
  const [tab, setTab] = useState("Lab Assistant");
  const studentsToDisplay = Students_Datas[tab] || [];

  return (
    <Box
      py="8rem"
      px={{ base: "1rem", md: "2rem", lg: "3rem", xl: "4rem" }}
      width="100%"
    >
      <Heading size="xl" textAlign="center" pb="2rem">
        Our Teams
      </Heading>
      <HStack
        fontSize={{ base: "1rem", md: "1.3rem" }}
        justifyContent={{
          base: "left",
          md: "left",
          lg: "center",
          xl: "center",
        }}
        pb="3rem"
        wrap="wrap"
      >
        {Object.keys(Students_Datas).map((data, index) => (
          <Box key={index} mx="0.5rem">
            <Link
              px="0.5rem"
              textDecoration="underline"
              _hover={{ textDecoration: "none" }}
              color="white"
              onClick={() => setTab(data)}
            >
              {data}
            </Link>
            {index < Object.keys(Students_Datas).length - 1 && (
              <Text as="span" color="white">
                |
              </Text>
            )}
          </Box>
        ))}
      </HStack>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        justifyItems="center"
      >
        {studentsToDisplay.map((student, index) => (
          <ProfileCard key={index} link={student} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
