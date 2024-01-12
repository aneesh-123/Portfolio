import React from 'react';
import styles from './styles/Contact.module.css'; // Import the CSS module
import githubIcon from './assets/github2.png'
import LinkedInIcon from './assets/LinkedIn.png'
import EmailIcon from './assets/email.png'


function Contact() {
  return (
    <div className={styles.contactContainer}>
      <a href="https://github.com/aneesh-123" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
        GitHub
        <img src={githubIcon} alt="GitHub" className={styles.contactIcon} />
      </a>
      
      <a href="https://www.linkedin.com/in/aneesh-nagalkar/" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
        LinkedIn
        <img src={LinkedInIcon} alt="LinkedIn" className={styles.LinkedIncontactIcon} />
      </a>

      <a href="mailto:aneeshnagalkar@gmail.com" className={styles.contactItem}>
        Email
        <img src={EmailIcon} alt="Email" className={styles.contactIcon} />
      </a>
    </div>
  );
}

export default Contact;
