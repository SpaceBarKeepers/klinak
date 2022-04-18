import React from 'react';
import MenuItem from './MenuItem';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

function Navbar() {
  const { dictionary } = useLanguage();
  const { theme } = useTheme();

  return (
    <nav className="navbar">
      <MenuItem
        menuLink="about"
        menuText={dictionary.navbar.about}
        menuColor={theme.colors.menuBtn1}
        textColor={theme.colors.menuText}
      />
      <MenuItem
        menuLink="bookings"
        menuText={dictionary.navbar.reservation}
        menuColor={theme.colors.menuBtn2}
        textColor={theme.colors.menuText}
      />
      <MenuItem
        menuLink="info"
        menuText={dictionary.navbar.usefulInfo}
        menuColor={theme.colors.menuBtn1}
        textColor={theme.colors.menuText}
      />
      <MenuItem
        menuLink="contact"
        menuText={dictionary.navbar.contact}
        menuColor={theme.colors.menuBtn2}
        textColor={theme.colors.menuText}
      />
    </nav>
  );
}

export default Navbar;
