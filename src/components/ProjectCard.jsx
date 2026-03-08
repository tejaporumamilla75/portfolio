import { motion } from 'framer-motion';

/**
 * ProjectCard — glassmorphism card for a single project.
 * @param {{ title, description, technologies, githubLink, demoLink, status }} props
 */
export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  status,
}) {
  const statusClass = status === 'Coming Soon' ? 'coming-soon' : 'live';

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      <span className={`project-status ${statusClass}`}>
        {status === 'Coming Soon' ? '🚧' : '🟢'} {status}
      </span>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tech">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {status !== 'Coming Soon' && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
