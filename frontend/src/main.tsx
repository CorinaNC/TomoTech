import { ChakraProvider } from "@chakra-ui/react"
import * as React from "react"
import { createRoot } from "react-dom/client"
import { Auth0Provider } from "@auth0/auth0-react"
import App from "./App"
import './index.css';
import customTheme from "./theme"
import BreadWrapper from "./components/breadWrapper"

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-1b61qkzokr8fuj25.us.auth0.com"
    clientId="3MppoaQUXmsbo8UNd1WBded6MrdzORKJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <BreadWrapper>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
    </BreadWrapper>
  </React.StrictMode>
  </Auth0Provider>,
)