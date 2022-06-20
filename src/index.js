import React from 'react';
import ReactDOM from "react-dom/client";
import {Helmet} from "react-helmet";
import 'bootstrap';
import '../scss/main.scss';


import Main from './main';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Helmet>
    <Main />
  </React.StrictMode>
);
