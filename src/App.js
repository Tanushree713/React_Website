import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
import './App.css';


function App() {
  return (
   <>
   <Navbar/>
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
   </>
  );
}

export default App;
