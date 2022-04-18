import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function AboutUs() {
  const { dictionary } = useLanguage();

  return <span>{dictionary.aboutUs}</span>;
}

export default AboutUs;
