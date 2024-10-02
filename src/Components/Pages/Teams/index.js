import ProfileCard from "./ProfileCard";
import {
  Heading,
  Box,
  Link,
  HStack,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Students_Datas from "../../../Datas/Students_Datas.json";
import { useState } from "react";

export default function Teams() {
  const [tab, setTab] = useState("All team members");
  const [searchTerm, setSearchTerm] = useState("");

  // Get all students from the array
  const allStudents = Students_Datas; // Assuming this is an array of student objects

  // Determine students to display based on the selected tab and search term
  const studentsToDisplay = allStudents.filter((student) => {
    // Check if the selected tab is "ALL team members" or if the student's label matches the tab
    const matchesCategory =
      tab === "All team members" || student.label === tab;
    // Check if the student's name matches the search term
    const matchesSearchTerm = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  // Categories for the team
  const categories = [
    "All team members",
    "Lab Assistant",
    "PHD Students",
    "MS Students",
    "Undergraduate",
    "Alumni",
  ];

  return (
    <Box
      py={{ base: "1rem", md: "2rem", lg: "3rem", xl: "4rem" }}
      px={{ base: "1rem", md: "2rem", lg: "3rem", xl: "4rem" }}
      width="100%"
    >
      <Heading size="2xl" textAlign="center" pb="2rem">
        Our team
      </Heading>

      {/* Search Bar */}
      <Box mb="2rem" width="100%" textAlign="center">
        <InputGroup maxW="52rem" mx="auto" my="1rem">
          <InputLeftElement pointerEvents="none">
            <SearchIcon size="lg" color="gray.300" />
          </InputLeftElement>
          <Input
            h="3rem"
            type="text"
            placeholder="Search"
            borderRadius="1rem"
            textColor="white"
            _placeholder={{ color: "gray.400" }}
            borderColor="white"
            _focus={{ borderColor: "black" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </Box>

      {/* Team Categories */}
      <HStack
        fontSize={{ base: "1rem", md: "1.3rem" }}
        justifyContent="center"
        pb="3rem"
        wrap="wrap"
      >
        {categories.map((category, index) => (
          <HStack key={category}>
            <Link
              onClick={() => setTab(category)}
              textDecoration={tab === category ? "underline" : "none"} // Underline active tab
              color={tab === category ? "white" : "gray.500"} // Change color of active tab
              _hover={{ textDecoration: "none", color: "white" }} // Hover effect
              transition="color 0.2s, font-weight 0.2s" // Smooth transitions
              >
              {category}
            </Link>
            {/* Add separator bar | for all but the last category */}
            {index !== categories.length - 1 && <Text>|</Text>}
          </HStack>
        ))}
      </HStack>

      {/* Profile Cards */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6} justifyItems="center">
        {studentsToDisplay.map((student, index) => (
          <ProfileCard key={index} link={student} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
