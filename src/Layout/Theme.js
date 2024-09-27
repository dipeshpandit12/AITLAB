import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#e356fc",
      900: "#1a202c",
    },
    // Setting default text color for the whole app
    text: "#2C3E50",
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Arial, sans-serif",
      },
    },
  },
  styles: {
    global: {
      // Default text color for all elements
      body: {
        color: "#2C3E50",
       fontFamily:"'Poppins', sans-serif"
      },

      header: {
        bg: "white",
      },
      footer: {
        bg: "white",
    },
  },
  },
});

export default theme;
