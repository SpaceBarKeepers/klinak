import React from 'react';
import logo from '../images/logo.png';
import Navbar from '../components/Navbar';

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
