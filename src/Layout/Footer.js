// import { Box ,Flex,Icon,Link,Text,  useColorModeValue,} from "@chakra-ui/react";
// import { FaGithub, FaLinkedin, FaTwitter, FaResearchgate } from "react-icons/fa";
// import { SiGooglescholar } from "react-icons/si";
// import socialMediaData from "../Datas/socialMediaData.json";




// export default function Footer() {

//   const backgroundColor = useColorModeValue('#0a1e30', '#0a1e30');

//   const iconMap = {
//     FaGithub: FaGithub,
//     FaLinkedin: FaLinkedin,
//     FaTwitter: FaTwitter,
//     FaResearchgate: FaResearchgate,
//     SiGooglescholar: SiGooglescholar
//   };


//   return (
//     <Box bg={backgroundColor} px={{base:"1rem",md:"1rem",lg:"4rem",xl:"4rem"}} pb="1rem">
//         <Flex direction={{base:"column",md:"column",lg:"row",xl:"row"}} justifyContent="space-between" alignItems="center" height="6rem">
//           <Box height="4rem" alignContent="center">
//             {socialMediaData.links.map((link, index) => {
//               const IconComponent = iconMap[link.icon];
//               return (
//                 <Link href={link.href} isExternal key={index}>
//                   <Icon boxSize="2.3rem" as={IconComponent} color={link.color} pl="0.8rem" />
//                 </Link>
//               );
//             })}
//           </Box>
//           <Box >
//             <Text fontSize="sm" fontWeight="200" textAlign="center">Copyright @ {new Date().getFullYear()} Subasish Das. All rights reserved.</Text>
//           </Box>
//         </Flex>
//     </Box>
//   );
// }



export default function Footer(){
  <>
  </>
}