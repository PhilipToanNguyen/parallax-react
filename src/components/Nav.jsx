import React from 'react';
import Logo from '../img/pliplogo.png'


const Nav = () => {

    const menuLink = 'https://drive.google.com/file/d/1FE7fsrMfEkyzTcIp3McWePfqUMYKWuaG/view?usp=sharing';
  return (
    <nav className='nav'>
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="links-container">
      <a href={menuLink} target="_blank" rel="noopener noreferrer">Menu</a>
        <a href="#contact">Book</a>
      </div>
    </nav>
  );
};

export default Nav;