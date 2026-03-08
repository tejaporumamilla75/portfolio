import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

/**
 * Projects — renders project cards from projects.json with scroll reveal.
 */
export default function Projects() {
  const { projects } = projectsData;

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of projects I&apos;ve built and contributed to
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
