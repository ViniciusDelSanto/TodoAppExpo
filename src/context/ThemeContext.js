import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode
      ? {
          background: '#121212',
          text: '#FFFFFF',
          cardBackground: '#1E1E1E',
          buttonBackground: '#BB86FC',
          buttonText: '#000000',
        }
      : {
          background: '#FFFFFF',
          text: '#000000',
          cardBackground: '#F5F5F5',
          buttonBackground: '#007BFF',
          buttonText: '#FFFFFF',
        },
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};