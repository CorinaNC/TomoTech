import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-1b61qkzokr8fuj25.us.auth0.com"
    clientId="3MppoaQUXmsbo8UNd1WBded6MrdzORKJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)