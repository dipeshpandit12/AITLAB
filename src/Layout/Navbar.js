/** @format */

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Container,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import navLinks from "../data/nav_links.json"; // Import the nav_links from JSON

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="blue.500" w="100%">
      {/* Container to constrain content within container.xl */}
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo: Clickable to Home */}
          <NavLink to="/">
            <Image
              src="/img/logo-white.png" // Path to logo in the public folder
              alt="AIT Lab Logo"
              boxSize="70px"
              objectFit="contain"
              cursor="pointer"
            />
          </NavLink>

          {/* Desktop Menu */}
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {navLinks.map((item, index) => (
              <NavLink
                key={item.path || index}
                to={item.path}
                style={{ position: "relative", textDecoration: "none" }}
              >
                {({ isActive }) => (
                  <Text
                    fontSize="larger"
                    letterSpacing="wide"
                    color="white"
                    position="relative"
                    paddingBottom="3px"
                    _before={{
                      content: '""',
                      position: "absolute",
                      width: isActive ? "100%" : "0%",
                      height: "3px",
                      bottom: "-3px",
                      left: "0",
                      backgroundColor: "white",
                      transition: "width 0.3s ease-in-out",
                    }}
                    _hover={{
                      _before: {
                        width: "100%",
                      },
                    }}
                  >
                    {item.name}
                  </Text>
                )}
              </NavLink>
            ))}
          </HStack>

          {/* Mobile Menu Toggle */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onOpen}
          />
        </Flex>
      </Container>

      {/* Mobile Drawer Menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack as="nav" spacing={4} mt={6}>
              {navLinks.map((item, index) => (
                <NavLink
                  key={item.path || index}
                  to={item.path}
                  onClick={onClose}
                >
                  <Text fontWeight="bold">{item.name}</Text>
                </NavLink>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
