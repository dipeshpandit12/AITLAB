import React from 'react';
import {
  Box,
  Flex,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
// import logo from '../Assets/Urban-ResilienceAi-Lab_Color.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navLinks from "../Datas/header_Links.json"

export default function Header(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoveredItem, setHoveredItem] = useState(null);
  const activeColor = useColorModeValue('#00FFFF', '#00FFFF');

  return (
    <Box
      color="white"
      px={{ base: 4, md: 8 }}
      py={4}
      letterSpacing="0.1em"
      boxShadow="md"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
      >
        <Link to="/" ><Image
          src=""
          alt="logo"
          boxSize={{ base: '100px', md: '150px' }}
          objectFit="contain"
        />
        </Link>
        <Flex alignItems="center">
          <Stack
            direction="row"
            spacing={1.5}
            display={{ base: 'none', md: 'flex' }} // Keep space larger for elegance
            alignItems="center"
          >
            {navLinks.map((item, index) => (
              <NavLink key={index} to={`/${item.path}`}>
                <Text
                  as="a"
                  color="white"
                  padding="10.506px 0" // Padding to match the example
                  margin="0 11.9px" // Match the horizontal margin
                  transition="color 0.8s ease-in-out, background-color 0.8s ease-in-out, opacity 0.8s"
                  _focus={{ boxShadow: 'none' }}
                  cursor="pointer"
                  opacity={hoveredItem && hoveredItem !== item ? 0.5 : 1} // Dim other links
                  onMouseEnter={() => setHoveredItem(item)} // Set hovered item
                  onMouseLeave={() => setHoveredItem(null)} // Reset when not hovering

                >
                  {item.name}
                </Text>
              </NavLink>
            ))}
          </Stack>
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            ml={2}
            variant="outline"
            colorScheme="teal"
          />
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent color="white">
          <DrawerCloseButton />
          <DrawerHeader>
            <Image
              src=""
              alt="Urban Resilience.AI Lab"
              boxSize="120px"
              objectFit="contain"
            />
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {['Research', 'News', 'Media', 'People', 'Publications', 'Opportunities'].map((item, index) => (
                <NavLink key={index} to={`/${item}`}>
                  <Text
                    color="white"
                    transition="color 0.2s ease-in-out, opacity 0.2s"
                    _hover={{ color: activeColor }}
                    _focus={{ boxShadow: 'none' }}
                    cursor="pointer"
                    opacity={hoveredItem && hoveredItem !== item ? 0.5 : 1}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item}
                  </Text>
                </NavLink>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};