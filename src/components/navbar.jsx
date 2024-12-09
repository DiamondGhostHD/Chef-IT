import React from 'react';
import '/src/styles/navbar.css';
import '/src/styles/index.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className='navbar-left'>
        <div className='logo-container'>
          <img className='logo-small' src='/src/assets/logo-light.svg' alt='Logo-light' />
        </div>
        <div className='navbar-links'>
          <a href="#Recipes">Recipes</a>
          <a href="#Add Recipe">Add Recipe</a>
        </div>
      </div>
      <div className='navbar-right'>
        <a href="#Login">Login</a>
        <a href="#Register">Register</a>
      </div>
    </div>
  );
}

export default Navbar;
