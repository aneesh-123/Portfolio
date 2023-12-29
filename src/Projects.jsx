import React, { useState, useRef, useEffect } from 'react';
import styles from './styles/Projects.module.css';
import projectsData from './ProjectsContent';

function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const containerRef = useRef(null);

  const toggleProject = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpenProject(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.projectsContainer}>
      {projectsData.map((project, index) => (
        <div key={index} className={styles.projectItem} onClick={() => toggleProject(index)}>
          {project.title}
        </div>
      ))}

      {openProject !== null && (
        <div className={`${styles.projectDisplay} ${styles.show}`}>
          <h2 className={styles.projectTitle}>{projectsData[openProject].title}</h2>
          <div className={styles.dateAndDependencies}>
            <span className={styles.italicText}>{projectsData[openProject].date}</span>
            <span className={styles.italicText}>{projectsData[openProject].dependencies}</span>
          </div>
          <h3 className={styles.neonText}>Project Overview</h3>
          <p>{projectsData[openProject].projectOverview}</p>
          <h3 className={styles.neonText}>What I Learned</h3>
          <ul>
            {projectsData[openProject].whatILearned.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          {projectsData[openProject].githubLink && (
            <a href={projectsData[openProject].githubLink} target="_blank" rel="noopener noreferrer" className={styles.button}>View Repository</a>
          )}
          {projectsData[openProject].projectLink && (
            <a href={projectsData[openProject].projectLink} target="_blank" rel="noopener noreferrer" className={styles.button}>Project & Visuals</a>
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;
