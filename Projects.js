import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of your project.</p>
          <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Description of your project.</p>
          <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
