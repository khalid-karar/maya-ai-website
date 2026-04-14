import React, { createContext, useContext, ReactNode } from 'react';

type Language = 'en';
type Direction = 'ltr' | 'rtl'; // Keep type for compatibility but always return 'ltr'

interface LanguageContextType {
  language: Language;
  direction: Direction;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const language: Language = 'en';
  const direction: Direction = 'ltr';

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}