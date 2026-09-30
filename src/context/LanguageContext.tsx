'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translations } from '@/data/translations';
import { CvData, getCvData } from '@/data/cv-data';
import { Project } from '@/types/project';
import { getProjects } from '@/data/projects';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  cvData: CvData;
  projects: Project[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio_language_preference';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === 'es' || savedLang === 'en') {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      } else {
        // Detect browser language if not explicitly stored
        const browserLang = navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
        // Default to Spanish unless English browser is detected, but keep 'es' as default fallback
        if (browserLang === 'en' && !savedLang) {
          // If the user has explicitly an English browser, we could either keep 'es' or switch.
          // Since the portfolio is originally Argentinian, keeping 'es' default is safest.
        }
      }
    } catch {
      // LocalStorage not available or privacy blocked
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore localStorage errors
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'es' ? 'en' : 'es';
    setLanguage(nextLang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
    cvData: getCvData(language),
    projects: getProjects(language),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
