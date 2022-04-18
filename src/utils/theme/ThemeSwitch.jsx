import React, { useState } from 'react';
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

  return (
    <div>
      <FaSnowflake />
      <Switch
        {...label}
        defaultChecked
        color="warning"
        checked={checked}
        onChange={handleChange}
      />
      <BsFillSunFill />
    </div>
  );
}

export default ThemeSwitch;
