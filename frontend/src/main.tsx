import { ChakraProvider } from "@chakra-ui/react"
import * as React from "react"
import { createRoot } from "react-dom/client"
import { Auth0Provider } from "@auth0/auth0-react"
import App from "./App"
import './index.css';
import customTheme from "./theme"
import BreadWrapper from "./components/breadWrapper"
import { BrowserRouter } from "react-router-dom"
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <BreadWrapper>
          <ChakraProvider theme={customTheme}>
            <App />
          </ChakraProvider>
        </BreadWrapper>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>,
)