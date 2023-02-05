import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Navbar from '../src/components/Nav';
import { DataContextProvider } from './contexts/DataContext';

const RouterLink = () => {
  return (
    <>
      <DataContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </DataContextProvider>
    </>
  );
}

export default RouterLink;