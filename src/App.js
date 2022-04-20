import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Annual from './Annual';
import Events from './Events';
import Signup from './Signup';
import Signin from './Signin';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
        <Nav />
        <Routes><Route path="/" element={<Home />} /></Routes>
        <Routes><Route path="/About" element={<About />} /></Routes>
        <Routes><Route path="/Annual" element={<Annual />} /></Routes>
        <Routes><Route path="/Events" element={<Events />} /></Routes>
        <Routes><Route path="/Signup" element={<Signup />} /></Routes>
        <Routes><Route path="/Signin" element={<Signin />} /></Routes>
    </div>
    </Router>
  );
}

const Home = () => (
<div>
<section className="hero">
    <div className="hero-content">
       <h1 className="hero-title">
            Welcome to My Navbar Test
       </h1>    
       <h2 className="hero-subtitle">
            Navbars are rad! This is my hero section!
       </h2> 
    </div>
</section>
</div>
);

export default App;
