import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { languageOptions } from './languages';
import czech from '../../images/cs.png';
import english from '../../images/en.png';

function LanguageSwitch() {
  const { userLang, userLangChange } = useLanguage();

  const handleLanguageChange = (e) => {
    userLangChange(e.target.id);
  };

  const flags = {
    cs: czech,
    en: english,
  };

  return (
    <ul className="languageSwitch">
      {Object.keys(languageOptions).map((id) => (
        <li key={id}>
          <img
            className="flags"
            src={flags[id]}
            alt=""
            onClick={handleLanguageChange}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
}

export default LanguageSwitch;
