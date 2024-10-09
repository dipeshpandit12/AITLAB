/** @format */

import { Grid, GridItem,  Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <Grid templateRows="auto 1fr auto" minH="100vh">
      {/* Navbar (Full Width) */}
      <GridItem as="header" w="100%">
        <Navbar />
      </GridItem>

      {/* Main Content (Limited to container.xl) */}
      <GridItem as="main" w="100%">
        <Container maxW="container.xl" py={8}>
          {children}
        </Container>
      </GridItem>

      {/* Footer (Full Width) */}
      <GridItem as="footer" w="100%" color="white">
        <Footer />
      </GridItem>
      <ScrollToTop />
    </Grid>
  );
}
