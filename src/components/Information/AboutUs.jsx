import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function AboutUs() {
  const { dictionary } = useLanguage();

  return <p>{dictionary.aboutUs}</p>;
}

export default AboutUs;
