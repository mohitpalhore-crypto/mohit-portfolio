import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <strong>Mohit Palhore</strong>, a passionate software developer 
              with expertise in modern web technologies. I specialize in creating 
              responsive, user-friendly applications that solve real-world problems.
            </p>
            <p>
              With a strong foundation in JavaScript, React, and Node.js, I enjoy 
              turning complex ideas into simple, beautiful designs. I'm constantly 
              learning new technologies and staying up-to-date with industry trends.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Name:</strong> Mohit palhore
              </div>
              <div className="detail-item">
                <strong>Location:</strong> India
              </div>
              <div className="detail-item">
                <strong>Email:</strong> palhoreatul999@gmail.com
              </div>
              <div className="detail-item">
                <strong>Education:</strong> Bachelor's in Computer Science
              </div>
            </div>
            <div className="about-buttons">
              <a href="#contact" className="cta-button">Hire Me</a>
              <a 
                href="/src/assets/resume.pdf" 
                download="Mohit_Palor_Resume.pdf" 
                className="cta-button secondary"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
