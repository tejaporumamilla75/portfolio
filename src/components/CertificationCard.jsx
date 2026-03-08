import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CertificationCard — Enhanced glassmorphism card for a single certification.
 * Features: Image lazy loading, smooth animations, link preview, external link indicator.
 * Clicking the card or image opens the certificate URL in a new tab.
 * @param {{ title, provider, image, url, year }} props
 */
export default function CertificationCard({ title, provider, image, url, year }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {/* Image section with loading state */}
      <div className="cert-image-wrapper">
        {!imageLoaded && <div className="cert-image-skeleton" />}
        <img
          src={image}
          alt={title}
          className={`cert-image${imageLoaded ? ' loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Info section */}
      <div className="cert-info">
        <h3 className="cert-title">{title}</h3>
        <p className="cert-provider">{provider}</p>
        {year && <span className="cert-year">{year}</span>}
      </div>

      {/* External link indicator */}
      <div className="cert-link-indicator" title="Open certificate">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM5 5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7H5V7h7V5H5z"/>
        </svg>
      </div>
    </motion.a>
  );
}
