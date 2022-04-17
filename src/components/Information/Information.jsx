import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import InfoTabs from './InfoTabs';
import './information.css';

function Information() {
  const { dictionary } = useLanguage();
  const { theme } = useTheme();
  return (
    <section
      style={{
        backgroundColor: theme.colors.importantInfoBackground,
      }}
      className="informationSection"
    >
      <h2>{dictionary.navbar.usefulInfo}</h2>
      <InfoTabs />
    </section>
  );
}

export default Information;
