import React from 'react';
import '../components.js/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <a href="/"><h1 className='logo'>MooVie'S</h1></a>
    <ul className='list'>
        <a href="/">Home</a>
        <a href="/">Support</a>
        <a href="/">Register</a>
        <a href="/">Sign in</a>
    </ul>
       
    </div>
  )
}

export default Navbar;