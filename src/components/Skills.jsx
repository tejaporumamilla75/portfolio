import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import skillsData from '../data/skills.json';

/**
 * Skills — groups skills by category and renders animated SkillCard grids.
 * Data comes from skills.json.
 */
export default function Skills() {
  const { skills } = skillsData;

  /* Group skills by category */
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = Object.keys(grouped);

  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      {categories.map((category, catIdx) => (
        <motion.div
          className="skills-category"
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: catIdx * 0.1 }}
        >
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {grouped[category].map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
