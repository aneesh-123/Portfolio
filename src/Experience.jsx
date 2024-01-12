import React, { useState } from 'react';
import styles from './styles/Experience.module.css';
import experienceData from './ExperienceContent';

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (index) => {
    setSelectedExperience(index);
  };

  // Placeholder content for initial display
  const initialContent = (
    <>
      <h1 className={styles.neonText}>Welcome!</h1>
      <p className={styles.experienceDate}>Click any of the Experiences to Learn More!</p>
    </>
  );

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.titlesBox}>
        {experienceData.map((item, index) => (
          <p key={index} onClick={() => handleExperienceClick(index)} className={styles.experienceTitle}>
            {item.title}
          </p>
        ))}
      </div>
      <div className={styles.neonBox}>
        {selectedExperience !== null ? (
          <>
            <h1 className={styles.neonText}>{experienceData[selectedExperience].title}</h1>
            <p className={styles.experienceDate}>
              {experienceData[selectedExperience].role ? `${experienceData[selectedExperience].role} | ` : ''}
              {experienceData[selectedExperience].date}
            </p>
            <ul className={styles.experienceDescription}>
              {experienceData[selectedExperience].description.split('.').map((point, index) => (
                point.trim() ? <li key={index}>{point.trim()}</li> : null
              ))}
            </ul>
          </>
        ) : (
          initialContent // Display initial content if no experience is selected
        )}
      </div>
    </div>
  );
}

export default Experience;
