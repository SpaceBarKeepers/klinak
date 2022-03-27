import React from 'react';
import { Link } from 'react-scroll';
import './menuItem.css';

function MenuItem({ menuLink, menuText, menuColor }) {
  return (
    <Link
      className="menuItem"
      to={menuLink}
      smooth={true}
      offset={50}
      duration={500}
      style={{ backgroundColor: `${menuColor}` }}
    >
      {menuText}
    </Link>
  );
}

export default MenuItem;
