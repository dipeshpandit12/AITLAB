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
  HStack,
} from "@chakra-ui/react";
import Students_Datas from "../../../Datas/Students_Datas.json";

export default function Teams() {
  return (
    <Box py="8rem" px={{base:"1rem",md:"2rem",lg:"3rem",xl:"4rem"}}>
      <Heading size="xl" textAlign="center">Our Teams</Heading>
      <HStack fontSize="1.5rem">
        <Link>
          All team members
        </Link>
      </HStack>
    </Box>
  );
}
