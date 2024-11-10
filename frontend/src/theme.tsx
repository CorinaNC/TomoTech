import { extendTheme, textDecoration } from "@chakra-ui/react";
// dummy theme, my original website theme
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#CE9964",
        color: "#CE9964",
        m: "50px"
      },
    },
  },
  components: {
    Button: {
      variants: {
        sm: {
          bg: '#CE9964',
          fontSize: 'md',
          color: "white",
          _hover: {
            bg: '#B07A4A',
            border: "color",
            textDecoration: "none",
          },
        },
        circular: {
            bg: '#B57F4A',
            fontSize: 'md',
            color: "white",
            borderRadius: '50%',
            height: "70px",
            width: "90px",
            _hover: {
              bg: '#B07A4A',
              border: "color"
            },
          },
      },
      defaultProps: {
        size: 'lg', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'green', // default is gray
      },
    },
    Container: {
      baseStyle: {
        color: "#FFE8CB",
      },
    },
  },
});

export default customTheme;