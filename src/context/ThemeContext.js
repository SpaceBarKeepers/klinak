import React, { useState, useEffect } from 'react';
import themes from '../utils/theme/schema.json';
import { setToLS, getFromLS } from '../utils/theme/storage';

const defaultTheme = themes.data.winter;

export const ThemeContext = React.createContext({ defaultTheme });

export const ContextThemeProvider = ({ children }) => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(defaultTheme);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLS('theme', mode);
    setTheme(mode);
  };

  const handleThemeChange = (theme) => {
    setTheme(themes.data[theme]);
    setToLS('theme', themes.data[theme]);
  };

  useEffect(() => {
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.winter);
    setThemeLoaded(true);
  }, []);

  const provider = { theme, themeLoaded, themes, handleThemeChange, setMode };

  return (
    <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
