import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from 'pages/home/index.jsx'


const Main = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default Main;