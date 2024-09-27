import {Grid,GridItem} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout({children}){
    return (
        <Grid
            templateColumns="repeat(12, 1fr)"
            templateRows="auto 1fr"
        >
            <GridItem rowSpan={1} colSpan={12} bg="#34495E" color="white" position="sticky" top="0" zIndex="1000" borderButtomRadius="3rem">
                <Header/>
            </GridItem>
            <GridItem colSpan={12} paddingY="3rem" paddingX={{base:"1rem",md:"2rem",lg:"4rem",xl:"4rem"}} bg="#F7F8FA" minHeight="100vh">
                {children}
            </GridItem>
            <GridItem colSpan={12} bg="#2C3E50" color="white">
                <Footer/>
            </GridItem>
        </Grid>
    )
}