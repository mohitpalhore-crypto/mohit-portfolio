import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <h3>Mohit Palhore</h3>
            <p>Software Developer & Problem Solver</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-social">
            <p>Connect with me</p>
            <div className="social-links">
              <a 
                href="https://github.com/mohitpalor" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/mohitpalor" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/mohitpalor" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Mohit Palhore. All rights reserved.</p>
          <p>Built with ❤️ using React & Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;