import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import Blog from './Components/Blog/Blog';


function App() {
  

  return (
    <>

    <BrowserRouter>
    <Navbar />
    <Sidebar />
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />


        </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
