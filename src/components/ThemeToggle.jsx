import { useState, useEffect } from 'react';

/**
 * ThemeToggle — toggles between light and dark mode.
 * Persists preference to localStorage and sets data-theme on <html>.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <img 
          src="/assets/Themeicons/sun-logo.svg" 
          alt="Light Mode"
          style={{ width: '24px', height: '24px', objectFit: 'contain' }}
        />
      ) : (
        <img 
          src="/assets/Themeicons/moon-logo.svg" 
          alt="Dark Mode"
          style={{ width: '24px', height: '24px', objectFit: 'contain' }}
        />
      )}
    </button>
  );
}
