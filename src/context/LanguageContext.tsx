import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../locales/translations';
import type { Language, TranslationKeys } from '../locales/translations';

interface LanguageContextType {
  lang: Language;
  t: TranslationKeys;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('azsig-lang');
    return (saved === 'en' || saved === 'id') ? saved : 'id'; // Default to ID as requested or based on project context
  });

  useEffect(() => {
    localStorage.setItem('azsig-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLanguage = (newLang: Language) => setLang(newLang);
  
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
