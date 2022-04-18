import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { languageOptions } from './languages';

function LanguageSwitch() {
  const { userLang, userLangChange } = useLanguage();

  const handleLanguageChange = (e) => userLangChange(e.target.value);

  const flags = {
    cs: 'https://www.flaticon.com/free-icons/czech-republic',
    en: 'https://www.flaticon.com/free-icons/uk-flag',
  };

  return (
    <ul onChange={handleLanguageChange} value={userLang}>
      {Object.entries(languageOptions).map(([id]) => (
        <li key={id} value={id}>
          <img src={flags.cs} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default LanguageSwitch;
