import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroData from '../data/hero.json';

/**
 * Hero — animated typing text carousel with CTA buttons and profile image.
 */
export default function Hero() {
  const { greeting, name, roles, introduction, ctaButtons } = heroData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  /* Typing animation effect */
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text === '') {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.substring(0, text.length - 1)
              : currentRole.substring(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* Text side */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="hero-greeting">{greeting}</span>
          <h1 className="hero-name">
            <span className="highlight">{name}</span>
          </h1>
          <div className="hero-role">
            <span>{text}</span>
            <span className="cursor" />
          </div>
          <p className="hero-intro">{introduction}</p>
          <div className="hero-buttons">
            {ctaButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`btn ${btn.primary ? 'btn-primary' : 'btn-secondary'}`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Image side */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="hero-image">
            <div className="hero-image-inner" style={{ backgroundColor: imageLoaded ? 'transparent' : 'var(--bg-primary)' }}>
              <img
                src="/profile pic.png"
                alt={`${name} - Full-Stack Developer & QA Engineer`}
                className="hero-profile-img"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                onError={() => console.error('Failed to load profile image')}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  opacity: imageLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
