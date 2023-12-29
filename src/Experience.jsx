import React, { useState } from 'react';
import styles from './styles/Experience.module.css'; // Import the CSS module
import experienceData from './ExperienceContent';

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (index) => {
    setSelectedExperience(index);
  };

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
        {selectedExperience !== null && (
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
        )}
      </div>
    </div>
  );
}

export default Experience;
