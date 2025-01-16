'use client';

import { createContext, useEffect, useState } from 'react';
import { getStorageItem, setStorageItem } from '@/services/storage';

const THEME_STORE_KEY = 'THME101';

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function ThemeProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const themePreference = getStorageItem(THEME_STORE_KEY);
    console.log('what we get', themePreference);

    if (themePreference == 'dark') {
      setDarkMode(true);
      document.documentElement.classList.toggle('dark');
    }

    if (typeof window !== 'undefined') {
      // never defined
      if (!themePreference || themePreference == 'dark') {
        // system has preference
        if (window.matchMedia('prefers-colors-schema: dark').matches) {
          setDarkMode(true);
          document.documentElement.classList.toggle('dark');
          setStorageItem(THEME_STORE_KEY, 'dark');
        }
      } else {
        if (themePreference !== 'dark') {
          setDarkMode(false);
          setStorageItem(THEME_STORE_KEY, 'light');
        }
      }
    }
  }, []);

  function toggleDarkMode() {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      setStorageItem(THEME_STORE_KEY, 'dark');
    } else if (!darkMode) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      setStorageItem(THEME_STORE_KEY, 'dark');
    }
  }

  const contextValue: ThemeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}
