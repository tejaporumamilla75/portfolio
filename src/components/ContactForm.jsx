import { useState } from 'react';
import { motion } from 'framer-motion';
import themeData from '../data/theme.json';

/**
 * ContactForm — glassmorphism contact form.
 * Fields come from theme.json. On submit, opens a new tab
 * (ready for future mailer API integration).
 */
export default function ContactForm() {
  const { formFields, submitLabel, formAction } = themeData.contact;
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formAction) {
      /* When a mailer API endpoint is configured in theme.json,
         open the result in a new tab */
      const form = e.target;
      form.setAttribute('target', '_blank');
      form.setAttribute('action', formAction);
      form.submit();
    } else {
      /* Fallback: construct a mailto link and open in new tab */
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}`
      );
      window.open(`mailto:tejaporumamilla@gmail.com?subject=${subject}&body=${body}`, '_blank');
    }
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {formFields.map((field) =>
        field.type === 'textarea' ? (
          <div className="form-group" key={field.name}>
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.label}
              required={field.required}
              rows={5}
              onChange={handleChange}
              className="form-input form-textarea"
            />
          </div>
        ) : (
          <div className="form-group" key={field.name}>
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.label}
              required={field.required}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        )
      )}
      <button type="submit" className="btn btn-primary form-submit">
        {submitLabel}
      </button>
    </motion.form>
  );
}
