import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Switch from '@mui/material/Switch';
import { BsFillSunFill } from 'react-icons/bs';
import { FaSnowflake } from 'react-icons/fa';

const label = { inputProps: { 'aria-label': 'Switch theme' } };

function ThemeSwitch() {
  const [checked, setChecked] = useState(true);
  const { handleThemeChange } = useTheme();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (checked) {
      handleThemeChange('summer');
    } else {
      handleThemeChange('winter');
    }
  }, [checked]);

  return (
    <div className="themeSwitch">
      <FaSnowflake size="25px" />
      <Switch
        {...label}
        defaultChecked
        color="default"
        checked={checked}
        onChange={handleChange}
      />
      <BsFillSunFill size="25px" />
    </div>
  );
}

export default ThemeSwitch;
