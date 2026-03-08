import { useEffect, useState } from 'react';
import themeData from '../data/theme.json';

/**
 * ThemeProvider — reads accent colors from theme.json and applies them
 * as CSS custom properties. Auto-cycles through 10 theme sets every 30 seconds.
 * Provides theme change context to all children.
 */
export default function ThemeProvider({ children }) {
  const [themeIndex, setThemeIndex] = useState(0);
  const [themeName, setThemeName] = useState('');
  const { themeSets, themeRotateSeconds, colors } = themeData;

  /* Apply a theme set to CSS custom properties */
  function applyTheme(index) {
    const set = themeSets[index];
    const root = document.documentElement;
    const angle = colors.gradientAngle || '135deg';

    root.style.setProperty('--accent-primary', set.accentPrimary);
    root.style.setProperty('--accent-secondary', set.accentSecondary);
    root.style.setProperty(
      '--accent-gradient',
      `linear-gradient(${angle}, ${set.accentPrimary} 0%, ${set.accentSecondary} 100%)`
    );
    root.style.setProperty('--accent-glow', hexToRgba(set.accentPrimary, 0.4));
    root.style.setProperty('--badge-bg', hexToRgba(set.accentPrimary, 0.15));
    root.style.setProperty('--badge-text', set.accentPrimary);
    
    // Store current theme in data attribute for visual feedback
    root.setAttribute('data-accent-theme', set.name);
    setThemeName(set.name);
  }

  /* Initial theme application */
  useEffect(() => {
    applyTheme(themeIndex);
  }, [themeIndex]);

  /* Auto-rotate through theme sets */
  useEffect(() => {
    if (!themeSets || themeSets.length <= 1) return;
    
    const interval = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % themeSets.length);
    }, (themeRotateSeconds || 30) * 1000);

    return () => clearInterval(interval);
  }, [themeSets, themeRotateSeconds]);

  return children;
}

/** Convert hex color to rgba string */
function hexToRgba(hex, alpha) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
