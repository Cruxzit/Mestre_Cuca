import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  // Check localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('mestre-cuca-dark-mode');
    if (saved !== null) return saved === 'true';
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme class to document root
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    // Persist to localStorage
    localStorage.setItem('mestre-cuca-dark-mode', isDark);
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(prev => !prev);

  return { isDark, toggleDarkMode };
};
