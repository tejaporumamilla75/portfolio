import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';
import './Experience.css';

/**
 * Experience — LinkedIn-style timeline of work experience with smooth animations.
 * Features: Expandable descriptions, skill badges, company links.
 */
export default function Experience() {
  const { experience } = experienceData;

  /* Format date string to readable format */
  function formatDate(dateStr) {
    const [year, month] = dateStr.split('-');
    const date = new Date(year, parseInt(month) - 1);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  }

  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey and career progression
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experience.map((job, index) => (
          <motion.div
            key={job.id}
            className="experience-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="timeline-dot" />

            {/* Experience card */}
            <motion.div
              className="experience-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header with title and date */}
              <div className="experience-header">
                <div className="experience-title-group">
                  <h3 className="experience-title">{job.title}</h3>
                  <a
                    href={job.company_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-company"
                  >
                    {job.company}
                  </a>
                </div>
                <span className="experience-date">
                  {formatDate(job.startDate)} - {job.endDate === 'present' ? 'Present' : formatDate(job.endDate)}
                </span>
              </div>

              {/* Location */}
              <p className="experience-location">
                📍 {job.location}
              </p>

              {/* Description */}
              <p className="experience-description">
                {job.description}
              </p>

              {/* Highlights */}
              {job.highlights && job.highlights.length > 0 && (
                <ul className="experience-highlights">
                  {job.highlights.map((highlight, i) => (
                    <li key={i}> {highlight}</li>
                  ))}
                </ul>
              )}

              {/* Skills tags */}
              {job.skills && job.skills.length > 0 && (
                <div className="experience-skills">
                  {job.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
