import { ChakraProvider } from "@chakra-ui/react"
import * as React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import theme from "./theme"

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)