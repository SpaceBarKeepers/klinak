import React from 'react';
import LanguageSwitch from '../utils/languages/LanguageSwitch';
import ThemeSwitch from '../utils/theme/ThemeSwitch';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';

function LandingPage() {
  const { dictionary } = useLanguage();

  return (
    <div>
      <Header />
      <LanguageSwitch />
      <ThemeSwitch />
      {dictionary.navbar.about}
    </div>
  );
}

export default LandingPage;
