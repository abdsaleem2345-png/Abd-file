import React, { createContext, useState, useContext, useEffect } from 'react';
import { en } from '../locales/en';
import { hi } from '../locales/hi';
import { es } from '../locales/es';
import { fr } from '../locales/fr';
import { it } from '../locales/it';
import { ko } from '../locales/ko';

// Map of all available languages
const translations = {
  en,
  hi,
  es,
  fr,
  it,
  ko
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default to English or load from localStorage
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('app_language');
    return savedLang || 'en';
  });

  useEffect(() => {
    localStorage.setItem('app_language', language);
    // Optional: Set HTML lang attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  // Translation function: t('welcome.title')
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (let k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if key is missing
        let fallback = translations['en'];
        for (let fbK of keys) {
          if (fallback && fallback[fbK]) {
            fallback = fallback[fbK];
          } else {
            return key; // Return key if not found anywhere
          }
        }
        return fallback; 
      }
    }
    return value;
  };

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setLanguage(langCode);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
