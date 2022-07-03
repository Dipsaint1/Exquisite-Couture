import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";


function App(){
  return(
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
