import { ChakraProvider } from "@chakra-ui/react"
import * as React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import customTheme from "./theme"
import BreadWrapper from "./components/breadWrapper"

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BreadWrapper>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
    </BreadWrapper>
  </React.StrictMode>,
)