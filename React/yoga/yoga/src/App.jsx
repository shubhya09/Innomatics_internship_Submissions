import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery'; // Make sure this file exists
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/yoga-poses" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
