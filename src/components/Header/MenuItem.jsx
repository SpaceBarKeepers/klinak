import React from 'react';
import { Link } from 'react-scroll';

function MenuItem({ menuLink, menuText, menuColor, textColor }) {
  return (
    <Link
      className="menuItem"
      to={menuLink}
      smooth={true}
      offset={50}
      duration={500}
      style={{ backgroundColor: `${menuColor}`, color: `${textColor}` }}
    >
      {menuText}
    </Link>
  );
}

export default MenuItem;
