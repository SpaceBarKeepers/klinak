import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import './aboutsection.css';
import Equipment from './Equipment';
import Gallery from './Gallery';
import MainFeatures from './MainFeatures';

function AboutSection() {
  const { dictionary } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      style={{
        backgroundColor: theme.colors.aboutBackground,
        color: theme.colors.aboutFontColor,
      }}
      className="aboutSection"
    >
      <h2>{dictionary.navbar.about}</h2>
      <MainFeatures />
      <div className="aboutBottom">
        <Equipment />
        <Gallery />
      </div>
    </section>
  );
}

export default AboutSection;
