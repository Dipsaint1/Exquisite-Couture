import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";


function App(){
  return(
    <>
      <Router>
        <Navbar />
          
        <Routes>
          <Route path="/" exact element={<HeroSection/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
