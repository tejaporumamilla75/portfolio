import { motion } from 'framer-motion';
import { getSkillIcon } from './SkillIcons';

/**
 * SkillCard — individual glassmorphism card with official SVG icon.
 * @param {{ name: string, icon: string }} props
 */
export default function SkillCard({ name, icon }) {
  return (
    <motion.div
      className="skill-card"
      whileHover={{ y: -6, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <div className="skill-icon">{getSkillIcon(icon)}</div>
      <div className="skill-name">{name}</div>
    </motion.div>
  );
}
