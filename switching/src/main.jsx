// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import translationEN from './locales/en/translation.json';
import translationHI from './locales/hi/translation.json';

// Initialize i18next
i18n.init({
  resources: {
    en: { translation: translationEN },
    hi: { translation: translationHI },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);
