import { Flex, Heading, Divider,VStack,Box, HStack, Hide,Menu,MenuButton,Show,MenuItem,MenuList,IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import header_Links from '../Datas/header_Links.json';
import { HamburgerIcon,CloseIcon } from '@chakra-ui/icons';

export default function Header() {
  const [activeTab, setActiveTab] = useState("HomePage");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex as="nav" alignItems="center" justifyContent="space-between" width="100%" px="1rem" py={{base:"1rem",md:"1rem",lg:"0rem",xl:"0rem"}}>
        <Box></Box>
        <Box>
         <Hide below='md'>
        <VStack width="100%" pt="1rem">
          <HStack>
            {header_Links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                exact
                onClick={() => handleTabClick(link.name)}
              >
                <Heading
                  px="1.5rem"
                  size="sm"
                  py="0.7rem"
                  borderTopRadius="0.5rem"
                  transition="all 0.3s ease-in-out"
                  bg={activeTab === link.name ? "white" : "transparent"}
                  color={activeTab === link.name ? "black" : "white"}
                >
                  {link.name}
                </Heading>
              </NavLink>
            ))}
          </HStack>
        </VStack>
        </Hide>
        </Box>
        <Box>
        <Show below='md'>
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} >
          <MenuButton
            as={ IconButton }
            aria-label='Options'
            icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant='outline'
            boxSize="2rem"
            bg={handleMenuToggle===false?"black":"white"}
            onClick={handleMenuToggle}
          />
          <MenuList color="black" width="100vw" height="100vh" borderRadius="1rem" p="0rem" m="0rem" transition="transform 0.7s ease-in-out" 
              transform={isMenuOpen ? "translateX(-0)" : "translateX(100%)"}>
            {header_Links.map((link, index) => (
              <NavLink key={index} to={link.path} onClick={() =>{ handleTabClick(link.name); setIsMenuOpen(false);}}>
                <MenuItem py="1rem" bg={activeTab === link.name ? "#2C3E50" : "transparent"} color={activeTab === link.name ? "white" : "black"} borderTopRadius={activeTab==="HomePage"?"1rem":"0rem"}>
                  <Heading size="md" >{link.name}</Heading>
                </MenuItem>
                <Divider/>
              </NavLink>
            ))}
          </MenuList>
        </Menu>
        </Show>
        </Box>
    </Flex>
  );
}
