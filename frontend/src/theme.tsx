import { extendTheme } from "@chakra-ui/react";


const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#252127",
        color: "white",

      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "underline",
          color: "gray",
        },
      },
    },
    Text: {
        baseStyle: {
          fontFamily: "Inter",
          fontSize: "md",
          fontWeight: "100"
        }
    },
    Heading: {
      baseStyle: {
        fontFamily: "Comfortaa",
        fontSize: "3xl",
      },
    },
    h2: {
      baseStyle: {
        fontFamily: "Inter",
        fontSize: "xl",
      }
    },

  },
});

export default customTheme;