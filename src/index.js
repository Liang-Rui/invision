import React from 'react';
import ReactDOM from "react-dom/client";
import 'bootstrap';
import '../scss/main.scss';

import Main from './main';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
