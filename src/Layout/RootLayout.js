import {Grid,GridItem,useBreakpointValue,useColorModeValue,} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout({children}){

    const fontSize = useBreakpointValue({ base: 'md', md: '17px' });
  const fontFamily = "'Ubuntu', sans-serif";
  const backgroundColor = useColorModeValue('#0a1e30', '#0a1e30');
    return (
        <Grid
            templateColumns="repeat(12, 1fr)"
            templateRows="auto 1fr"
        >
            <GridItem rowSpan={1} colSpan={12} bg={backgroundColor} fontFamily={fontFamily} fontSize={fontSize}
                 borderButtomRadius="3rem">
                <Header/>
            </GridItem>
            <GridItem colSpan={12} paddingY="3rem" paddingX={{base:"1rem",md:"2rem",lg:"4rem",xl:"4rem"}} bg="#2C3E50" color="white" minHeight="100vh">
                {children}
            </GridItem>
            <GridItem colSpan={12} bg="#2C3E50" color="white">
                <Footer/>
            </GridItem>
        </Grid>
    )
}