import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    title: "'Poppins', sans-serif", // Font for titles
    body: "system-ui, sans-serif", // Default body font
    heading: "Georgia, serif", // Default heading font
    mono: "Menlo, monospace", // Default monospace font

    primary: "'Roboto', sans-serif",      // Font for primary text
    secondary: "'Open Sans', sans-serif", // Font for secondary text
    tertiary: "'Lato', sans-serif",       // Font for tertiary text
    quaternary: "'Montserrat', sans-serif", // Font for quaternary text
    quinary: "'Merriweather', serif",     // Font for quinary text
  },
  colors: {
    header_background: "gray",
    body_background: "white",
    footer_background: "gray",

    primary: "black",
    secondary: "#F4F9E9",
    tertiary: "#EEF0EB",
    quaternary: "#B4B8AB",
    quinary: "#153243",
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "primary", // Assign primary font to Heading
        fontWeight: "bold",    // Set font weight for Heading
        color: "primary",      // Set color for Heading
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "secondary", // Assign secondary font to Text
        fontWeight: "normal",    // Set font weight for Text
        color: "quinary",        // Set color for Text
      },
    },
    Link: {
      baseStyle: {
        fontFamily: "tertiary", // Assign tertiary font to Link
        fontWeight: "medium",   // Set font weight for Link
        textDecoration: "underline", // Example of additional style
        color: "primary",       // Set color for Link
        _hover: {
          color: "secondary",   // Change color on hover
          textDecoration: "none" // Optional: Remove underline on hover
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        borderRadius: "md",
      },
      sizes: {
        sm: {
          fontSize: "12px",
          px: 4,
          py: 2,
        },
        md: {
          fontSize: "16px",
          px: 6,
          py: 4,
        },
      },
      variants: {
        solid: {
          bg: "quinary",
          color: "secondary",
          _hover: {
            bg: "secondary",
            color: "quinary",
          },
        },
        outline: {
          border: "2px solid",
          borderColor: "primary",
          color: "primary",
          _hover: {
            bg: "primary",
            color: "secondary",
          },
        },
        ghost: {
          color: "primary",
          _hover: {
            bg: "primary",
            color: "secondary",
          },
        },
        link: {
          color: "primary",
          textDecoration: "underline",
          _hover: {
            cursor: "pointer",
            color: "primary",
          },
          size: "sm",
          textTransform: "none",
        },
      },
      defaultProps: {
        size: "sm",
        variant: "outline",
      },
    },
  },
});
