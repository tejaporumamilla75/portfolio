/**
 * SkillIcons — Loads SVG icons from assets/skillicons folder
 * Returns an img element for each skill with proper dimensions
 */

// Icon mapping from skill names to asset filenames
const iconMap = {
  java: 'java-logo.svg',
  'java-logo': 'java-logo.svg',
  javascript: 'js-logo.svg',
  js: 'js-logo.svg',
  playwright: 'playwright-logo.svg',
  selenium: 'selenium-logo.svg',
  git: 'git-logo.svg',
  github: 'github-logo.svg',
  githubactions: 'githubactions-logo.svg',
  'github actions': 'githubactions-logo.svg',
  'github-actions': 'githubactions-logo.svg',
  mysql: 'mysql-logo.svg',
  bootstrap: 'bootstrap-logo.svg',
  html: 'html-logo.svg',
  css: 'css-logo.svg',
  springboot: 'springboot-logo.svg',
  'spring boot': 'springboot-logo.svg',
  'spring-boot': 'springboot-logo.svg',
  react: 'react-logo.svg',
};

/**
 * Returns an img element for a given skill key
 * @param {string} key — skill name/key
 * @returns {JSX.Element} img element with proper dimensions or null
 */
export function getSkillIcon(key) {
  if (!key) return null;
  
  const normalized = key.toLowerCase().trim().replace(/[\s\-]/g, '');
  const iconFile = iconMap[normalized] || iconMap[key.toLowerCase().trim()];
  
  if (!iconFile) {
    console.warn(`Icon not found for skill: ${key}`);
    return null;
  }
  
  const iconPath = `/assets/skillicons/${iconFile}`;
  
  return (
    <img 
      src={iconPath}
      alt={key}
      style={{
        width: '36px',
        height: '36px',
        objectFit: 'contain',
        filter: 'var(--icon-filter, none)'
      }}
      loading="lazy"
      onError={(e) => {
        console.warn(`Failed to load icon: ${iconPath}`);
        e.target.style.display = 'none';
      }}
    />
  );
}

export default iconMap;
