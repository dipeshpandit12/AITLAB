// import React from "react";
// import {
//   Box,
//   Flex,
//   Image,
//   useDisclosure,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   IconButton,
//   Stack,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { Link,NavLink  } from "react-router-dom";
// import { HamburgerIcon } from "@chakra-ui/icons";
// // import logo from '../Assets/Urban-ResilienceAi-Lab_Color.png';
// import { useState } from "react";
// import navLinks from "../Datas/header_Links.json";

// export default function Header() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const activeColor = useColorModeValue("black", "#00FFFF");
//   return (
//     <Box
//       color="white"
//       px={{ base: 4, md: 8 }}
//       py={4}
//       letterSpacing="0.1em"
//       boxShadow="md"
//     >
//       <Flex
//         h={{ base: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
//         alignItems="center"
//         justifyContent="space-between"
//         maxW="100%"
//         mx="auto"
//       >
//         <Link to="/">
//           <Image
//             src=""
//             alt="logo"
//             boxSize={{ base: "10rem", md: "15rem" }}
//             objectFit="contain"
//           />
//         </Link>
//         <Flex alignItems="center">
//           <Stack
//             direction="row"
//             spacing={1.5}
//             display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
//             alignItems="center"
//             px="5rem"
//           >
//             {navLinks.map((item, index) => (
//               <NavLink key={index} to={`/${item.path}`}>
//                 <Text
//                   as="a"
//                   fontSize="1.2rem"
//                   fontWeight="500"
//                   color="white"
//                   px="1rem"
//                   transition="color 0.8s ease-in-out, background-color 0.8s ease-in-out, opacity 0.8s"
//                   _focus={{ boxShadow: "none" }}
//                   cursor="pointer"
//                   opacity={hoveredItem && hoveredItem !== item ? 0.3 : 1} // Dim other links
//                   onMouseEnter={() => setHoveredItem(item)} // Set hovered item
//                   onMouseLeave={() => setHoveredItem(null)} // Reset when not hovering
//                 >
//                   {item.name}
//                 </Text>
//               </NavLink>
//             ))}
//           </Stack>
//           <IconButton
//             aria-label="Open Menu"
//             icon={<HamburgerIcon />}
//             display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
//             onClick={onOpen}
//             ml={2}
//             variant="outline"
//             colorScheme="teal"
//           />
//         </Flex>
//       </Flex>

//       {/* Mobile Drawer */}
//       <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
//         <DrawerOverlay/>
//         <DrawerContent color="black">
//           <DrawerCloseButton />
//           <DrawerHeader>
//             <Image src="" alt="logo" boxSize="5rem" objectFit="contain" />
//           </DrawerHeader>
//           <DrawerBody>
//             <Stack spacing={4}>
//               {navLinks.map((item, index) => (
//                 <NavLink key={index} to={`/${item.path}`} onClick={onClose}>
//                   <Text

//                     color={activeColor}
//                     fontSize="lg"
//                     fontWeight="700"
//                     transition="color 0.2s ease-in-out, opacity 0.2s"
//                     _hover={{ color: activeColor }}
//                     _focus={{ boxShadow: "none" }}
//                     cursor="pointer"
//                     opacity={hoveredItem && hoveredItem !== item ? 0.5 : 1}
//                     onMouseEnter={() => setHoveredItem(item)}
//                     onMouseLeave={() => setHoveredItem(null)}
//                   >
//                     {item.name}
//                   </Text>
//                 </NavLink>
//               ))}
//             </Stack>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </Box>
//   );
// }


export default function Headers(){
  <>
  </>
}