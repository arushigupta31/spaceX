import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <Auth0Provider
    domain="dev-7tztnd5b.us.auth0.com"
    clientId="Xgoa5VNJF0uroAEihHVej6Opx0R1frQu"
    redirectUri={window.location.origin}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
