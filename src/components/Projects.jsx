import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubLink: 'https://github.com/mohitpalor/ecommerce',
      liveLink: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Material-UI', 'Context API'],
      githubLink: 'https://github.com/mohitpalor/taskmanager',
      liveLink: 'https://taskmanager-demo.com',
      featured: false
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that displays current weather and forecasts using OpenWeather API with beautiful data visualization.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'CSS3', 'REST API', 'Chart.js'],
      githubLink: 'https://github.com/mohitpalor/weather-app',
      liveLink: 'https://weather-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Vite, featuring smooth animations and optimized performance.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Vite', 'CSS3', 'Netlify'],
      githubLink: 'https://github.com/mohitpalor/portfolio',
      liveLink: 'https://mohitpalor.com',
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience
        </p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;