import ProfileCard from "./ProfileCard";
import {
  Heading,
  Text,
  List,
  ListItem,
  Box,
  SimpleGrid,
  Link,
  Button,
} from "@chakra-ui/react";
import Students_Datas from "../../../Datas/Students_Datas.json";

export default function Openings() {
  return (
    <Box px={{ base: "0rem", md: "2rem", lg: "3rem", xl: "4rem" }}>
      <Box
        pb="4rem"
        fontSize={{ base: "sm", md: "sm", lg: "md", xl: "md" }}
        mt={{base:"3rem",md:"2rem",lg:"2rem",xl:"2rem"}}
        fontsize="1rem"
        fontFamily="'Poppins', sans-serif"
        fontWeight="400"
        font-height="107%"
      >
        <Heading size="xl" pb="1.5rem">
          Interested in joining AIT LAB ?
        </Heading>
        <Text
          pb="2rem"
          // pl={{ base: "0rem", md: "1.5rem", lg: "1rem", xl: "1rem" }}
          textAlign="justify"
        >
          The Ingram School of Engineering (ISOE) invites applications for
          several highly motivated M.S./Ph.D. GIA/GRA positions under the
          supervision of Dr. Subasish Das in the Civil Engineering program.
        </Text>
        <Heading size="md" pb="0.5rem">
          {" "}
          The prospective student will focus on combination of three research
          thrusts
        </Heading>
        <List
          pb="1.3rem"
          textIndent={{ md: "1.5rem", lg: "1.5rem", xl: "1.5rem" }}
          fontWeight="200"
        >
          <ListItem>1. Causal artificial intelligence,</ListItem>
          <ListItem>2. Advanced spatiotemporalmodeling, </ListItem>
          <ListItem>3. Transportation safety and operation.</ListItem>
        </List>
        <Heading size="md" pb="0.5rem">
          The responsibilities of the GRA include
        </Heading>
        <List
          pb="1.5rem"
          textIndent={{ md: "1.5rem", lg: "1.5rem", xl: "1.5rem" }}
        >
          <ListItem>1. Assist in writing literature review</ListItem>
          <ListItem>2. Develop spatiotemporal models</ListItem>
          <ListItem>3. Apply different AI algorithms</ListItem>
          <ListItem>4. Maintain codes and repositories in GitHub</ListItem>
          <ListItem>
            5. Build and maintain complex web applications for real-time
            spatiotemporal data stream
          </ListItem>
        </List>
        <Button _hover={{ bg: "gray" }} bg="brand.900" color="white" ml="1rem">
          <Link
            href="https://subasish.github.io/ait_lab/pdfs/GRA_Position%20Details_Fall22.pdf"
            isExternal
          >
            Apply
          </Link>
        </Button>
      </Box>
      <Box pb="2rem">
        <Heading size="xl" pb="1.5rem">
          Our Teams
        </Heading>
        <Box pb="3rem">
          <Heading
            as="h1"
            size="lg"
            pb="2rem"
            pl={{ base: "0.5rem", md: "1.5rem", lg: "0.5rem", xl: "0.5rem" }}
          >
            Postdoctoral Research Associates
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            justifyItems="center"
          >
            {Students_Datas.postdoctoralResearchAssociates.map(
              (student, index) => (
                <ProfileCard key={index} link={student} />
              )
            )}
          </SimpleGrid>
        </Box>
        <Box pb="3rem">
          <Heading as="h1" size="lg" pb="2.5rem">
            {" "}
            PhD Students
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            justifyItems="center"
          >
            {Students_Datas.phdStudents.map((student, index) => (
              <ProfileCard key={index} link={student} />
            ))}
          </SimpleGrid>
        </Box>
        <Box pb="3rem">
          <Heading as="h1" size="lg" pb="2.5rem">
            {" "}
            M.S. Students
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            justifyItems="center"
          >
            {Students_Datas.msStudents.map((student, index) => (
              <ProfileCard key={index} link={student} />
            ))}
          </SimpleGrid>
        </Box>
        <Box pb="2rem">
          <Heading as="h1" size="lg" pb="2.5rem">
            {" "}
            Undergraduate Students
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            justifyItems="center"
          >
            {Students_Datas.undergraduateStudents.map((student, index) => (
              <ProfileCard key={index} link={student} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
