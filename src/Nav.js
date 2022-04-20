import React from 'react';
import './App.css';

function Nav() {
  return (
    <nav>
        <h3>Logo</h3>
        <ul className='nav-Links'>
            <li>About</li>
            <li>Annual</li>
            <li>Events</li>
            <li>Signup</li>
            <li>Login</li>
        </ul>
    </nav>
  );
}

export default Nav;