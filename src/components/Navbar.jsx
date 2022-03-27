import React from 'react';
import MenuItem from './MenuItem';
import { useLanguage } from '../context/LanguageContext';
import "./navbar.css"

function Navbar() {
  const { dictionary } = useLanguage();

  return (
    <nav className="navbar">
      <MenuItem
        menuLink="about"
        menuText={dictionary.navbar.about}
        menuColor={({ theme }) => theme.colors.menuBtn1}
      />
      <MenuItem
        menuLink="bookings"
        menuText={dictionary.navbar.reservation}
        menuColor={({ theme }) => theme.colors.menuBtn1}
      />
      <MenuItem
        menuLink="info"
        menuText={dictionary.navbar.usefulInfo}
        menuColor={({ theme }) => theme.colors.menuBtn1}
      />
      <MenuItem
        menuLink="contact"
        menuText={dictionary.navbar.contact}
        menuColor={({ theme }) => theme.colors.menuBtn1}
      />
    </nav>
  );
}

export default Navbar;
