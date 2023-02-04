import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Navbar from '../src/components/Nav';

const RouterLink = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default RouterLink