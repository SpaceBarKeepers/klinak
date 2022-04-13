import React from 'react';
import LanguageSwitch from '../utils/languages/LanguageSwitch';
import ThemeSwitch from '../utils/theme/ThemeSwitch';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import {useTheme} from "../context/ThemeContext";

function LandingPage() {
  const { dictionary } = useLanguage();
  const { theme } = useTheme()

  return (
    <div>
      <Header />
      <LanguageSwitch />
      <ThemeSwitch />
      {dictionary.navbar.about}
      <p>Tady je stringified aktivní theme:</p>
      <p>{JSON.stringify(theme)}</p>
      <div style={{backgroundColor: theme.colors.menuBtn1}}>Nastylovaný div</div>
    </div>
  );
}

export default LandingPage;
