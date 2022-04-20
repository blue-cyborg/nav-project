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
        <Routes><Route path="/About" element={About} /></Routes>
        <Routes><Route path="/Annual" element={Annual} /></Routes>
        <Routes><Route path="/Events" element={Events} /></Routes>
        <Routes><Route path="/Signup" element={Signup} /></Routes>
        <Routes><Route path="/Signin" element={Signin} /></Routes>
    </div>
    </Router>
  );
}

export default App;
