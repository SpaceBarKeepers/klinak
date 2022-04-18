import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function AboutUs() {
  const { dictionary } = useLanguage();

  return <span className="aboutUs">{dictionary.aboutUs}</span>;
}

export default AboutUs;
