// src/App.jsx

import React from 'react';
import { Route, Routes } from "react-router-dom";
import Feed from './components/Feed';
//import Login from './components/Login';
//import Signup from './components/Signup';
//import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<Feed/>} />
      </Routes>
    </div>
    
  );
}

export default App;
