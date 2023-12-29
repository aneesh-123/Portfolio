import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100vh',
    width: '25%', // Adjust the width here
    backgroundColor: 'black', // Sidebar background color
    position: 'relative', // Position for pseudo-element
  };

  const verticalLineStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '6px', // Adjust line width
    height: '100vh', // Full height of the sidebar
    backgroundColor: 'white', // Vertical line color
    content: '', // Necessary for pseudo-elements
    boxShadow: 'none', // Remove the shadow
  };

  const contentStyle = {
    flex: '1',
    backgroundColor: 'black', // Apply black background to the content div
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional shadow for content
  };

  return (
    <Router>
      <div className="bg-gray-100 h-screen flex">
        {/* Sidebar */}
        <div style={sidebarStyle}>
          <div className="neon-text link">
            {/* Sidebar Links */}
            <Sidebar />
          </div>
          {/* Vertical Line */}
          <div style={verticalLineStyle}></div>
        </div>

        {/* Content */}
        <div className="flex-1 h-screen flex flex-col justify-center items-start" style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
