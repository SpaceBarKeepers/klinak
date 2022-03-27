import React from 'react';
import themes from './schema.json';
import { useTheme } from '../../context/ThemeContext';

function ThemeSwitch() {
  const { handleThemeChange } = useTheme();

  return (
    <select onChange={handleThemeChange}>
      {Object.entries(themes.data).map(([key, themeObject]) => (
        <option key={key} value={key}>
          {themeObject.name}
        </option>
      ))}
    </select>
  );
}

export default ThemeSwitch;
