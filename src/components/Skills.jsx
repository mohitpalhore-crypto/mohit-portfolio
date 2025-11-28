import React from 'react';
import { FaReact, FaNodeJs, FaJsSquare, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 90, icon: <FaJsSquare /> },
    { name: 'React', level: 85, icon: <FaReact /> },
    { name: 'Node.js', level: 80, icon: <FaNodeJs /> },
    { name: 'Express.js', level: 75, icon: <SiExpress /> },
    { name: 'MongoDB', level: 70, icon: <SiMongodb /> },
    { name: 'Git & GitHub', level: 85, icon: <FaGitAlt /> },
    { name: 'SQL', level: 75, icon: <FaDatabase /> },
    { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss /> }
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication', 
    'Time Management', 'Adaptability', 'Creativity', 
    'Critical Thinking', 'Leadership'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-content">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;