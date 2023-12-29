import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Sidebar.module.css'; // Import the CSS module

function Sidebar({ style }) {
  return (
    <div style={{ ...style, backgroundColor: 'black' }}> {/* Apply black background color */}
      {/* Links */}
      <div className={`${styles['neon-text']} ${styles['link']}`}>
        <Link to="/" className={styles['link']}>Home</Link>
        <br />
        <Link to="/experience" className={styles['link']}>Experience</Link>
        <br />
        <Link to="/projects" className={styles['link']}>Projects</Link>
        <br />
        <Link to="/contact" className={styles['link']}>Contact</Link>
      </div>
    </div>
  );
}

export default Sidebar;
