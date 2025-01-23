import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../providers/theme';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Theme must be used within Context');
  }
  return context;
};
