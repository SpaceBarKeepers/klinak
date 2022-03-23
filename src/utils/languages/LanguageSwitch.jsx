import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { languageOptions } from './languages';

function LanguageSwitch() {
  const { userLang, userLangChange } = useLanguage();

  const handleLanguageChange = (e) => userLangChange(e.target.value);

  return (
    <select onChange={handleLanguageChange} value={userLang}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitch;