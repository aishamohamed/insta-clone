// src/App.jsx

import React from 'react';
import { Route, Routes } from "react-router-dom";
import Feed from './components/Feed';
import Navbar from './components/navbar'
//import Login from './components/Login';
//import Signup from './components/Signup';
//import Profile from './components/Profile';

function App() {
  return (
    
    <div className='app-container'>
      <div className='main-container'>
        <Routes>
          <Route path="/" element= {<Feed/>} />          
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
