import React from 'react';
import logo from '../../images/logo.png';
import Navbar from './Navbar';
import { useTheme } from '../../context/ThemeContext';
import Hero from './Hero';
import './header.css';

function Header() {
  const { theme } = useTheme();

  return (
    <header style={{ backgroundColor: theme.colors.headerBackground }}>
      <Hero />
      <div className="headerRight">
        <img className="logo" src={logo} alt="logo" />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
