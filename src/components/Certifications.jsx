import { motion } from 'framer-motion';
import CertificationCard from './CertificationCard';
import certData from '../data/certifications.json';

/**
 * Certifications — grid of certification cards loaded from JSON.
 */
export default function Certifications() {
  const { certifications } = certData;

  return (
    <section id="certifications" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications and credentials I&apos;ve earned
        </p>
      </motion.div>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} {...cert} />
        ))}
      </div>
    </section>
  );
}
