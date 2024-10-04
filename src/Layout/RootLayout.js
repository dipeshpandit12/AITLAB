import {Grid,GridItem,useBreakpointValue} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout({children}){

const fontSize = useBreakpointValue({ base: 'md', md: '17px' });
  const fontFamily = "'Ubuntu', sans-serif";
    return (
        <Grid
            templateColumns="repeat(12, 1fr)"
            templateRows="auto 1fr"
        >
            <GridItem rowSpan={1} colSpan={12} bg="header_background" fontFamily={fontFamily} fontSize={fontSize}
                 borderButtomRadius="3rem">
                <Header/>
            </GridItem>
            <GridItem colSpan={12} paddingY="3rem" paddingX={{base:"1rem",md:"2rem",lg:"4rem",xl:"4rem"}} minHeight="100vh" bg="body_background">
                {children}
            </GridItem>
            <GridItem colSpan={12} bg="footer_background" color="white">
                <Footer/>
            </GridItem>
        </Grid>
    )
}