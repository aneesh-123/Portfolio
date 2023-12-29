import React from 'react';
import styles from './styles/Contact.module.css'; // Import the CSS module

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
        GitHub
        <img src="/path-to-github-icon.png" alt="GitHub" className={styles.contactIcon} />
      </a>
      
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
        LinkedIn
        <img src="/path-to-linkedin-icon.png" alt="LinkedIn" className={styles.contactIcon} />
      </a>

      <a href="mailto:your-email@example.com" className={styles.contactItem}>
        Email
        <img src="/path-to-email-icon.png" alt="Email" className={styles.contactIcon} />
      </a>
    </div>
  );
}

export default Contact;
