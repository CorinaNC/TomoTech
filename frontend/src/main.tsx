import { ChakraProvider } from "@chakra-ui/react"
import * as React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import customTheme from "./theme"

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)