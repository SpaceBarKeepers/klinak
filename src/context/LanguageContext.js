import React, { useState } from 'react';
import { languageOptions, dictionaryList } from '../utils/languages/languages';

export const LanguageContext = React.createContext({
  userLang: 'cs',
  dictionary: dictionaryList.cs,
});

export const LanguageProvider = ({ children }) => {
  const defaultLang = window.localStorage.getItem('rcml-lang');

  const [userLang, setUserLang] = useState(defaultLang || 'cs');

  const provider = {
    userLang,
    dictionary: dictionaryList[userLang],
    userLangChange: (selected) => {
      const newLang = languageOptions[selected] ? selected : 'cs';
      setUserLang(newLang);
      window.localStorage.setItem('rcml-lang', newLang);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);