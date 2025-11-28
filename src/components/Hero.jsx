import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Mohit Palhore</span>
            </h1>
            <h2 className="hero-subtitle">Software Developer</h2>
            <p className="hero-description">
              A passionate software developer specializing in creating exceptional 
              digital experiences. I bring ideas to life with clean, efficient code 
              and modern technologies.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="cta-button primary">
                View My Work
              </a>
              <a href="#contact" className="cta-button secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              {/* अपनी फोटो यहाँ एड करें */}
              <span>Your Photo Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;