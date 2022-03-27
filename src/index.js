import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { ContextThemeProvider } from './context/ThemeContext';
import { setToLS } from './utils/theme/storage.js';
import * as themes from './utils/theme/schema.json';

const Index = () => {
  setToLS('all-themes', themes.default);

  return (
    <LanguageProvider>
        <ContextThemeProvider>
          <App />
        </ContextThemeProvider>
    </LanguageProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
