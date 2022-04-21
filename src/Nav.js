import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'blue'
    };

    return (
    <nav>
        <strong><p>This could be branding</p></strong>
        <ul className='nav-Links'>
            <Link style={navStyle} to="/"><li>Home</li></Link>
            <Link style={navStyle} to="/About"><li>About</li></Link>
            <Link style={navStyle} to="/Annual"><li>Annual</li></Link>
            <Link style={navStyle} to="/Events"><li>Events</li></Link>
            <Link style={navStyle} to="/Team"><li>Team</li></Link>
            <Link style={navStyle} to="/Blogs"><li>Blogs</li></Link>
            <Link style={navStyle} to="/Signup"><li>Signup</li></Link>
            <Link style={navStyle} to="/Signin"><li>Login</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;