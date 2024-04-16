import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
  <GoogleOAuthProvider clientId="145161931401-ehmel5jhbp903nekrhfiti4apcdq3uf6.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
