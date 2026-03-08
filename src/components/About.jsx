import { motion } from 'framer-motion';
import aboutData from '../data/about.json';

/**
 * About — professional summary, highlight cards, and technology tags.
 * All content comes from about.json.
 */
export default function About() {
  const { title, bio, experienceSummary, highlights, technologies } = aboutData;

  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{experienceSummary}</p>
      </motion.div>

      <div className="about-content">
        {/* Left — text & tech tags */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>{bio}</p>

          <div className="about-tech">
            <h3>Technologies I Work With</h3>
            <div className="about-tech-tags">
              {technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — highlight cards */}
        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {highlights.map((h, i) => (
            <motion.div
              className="highlight-card"
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
            >
              <div className="value">{h.value}</div>
              <div className="label">{h.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
