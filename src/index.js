import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Security } from '@okta/okta-react';

const oktaConfig={
  issuer:`https://dev-4186439.okta.com/oauth2/default`,
  redirect_uri:`${window.location.origin}/implicit/callback`,
  client_id:`0oa396yytSALpbjo45d6`

};

ReactDOM.render(
  <BrowserRouter>
  <Security {...oktaConfig}>
    <App />
  </Security>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
