import React from 'react';
import Logo from '../img/pliplogo.png'


const Nav = () => {
  return (
    <nav className='nav'>
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="links-container">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;