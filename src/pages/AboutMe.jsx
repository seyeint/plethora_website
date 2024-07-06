import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function AboutMe() {
  return (
      <div className="about-me-container">
        <div className="about-me-content">
          <div className="tile-corner top-left"></div>
          <div className="tile-corner top-right"></div>
          <div className="about-me-image">
            <img src="/profile.jpeg" alt="profile"/>
          </div>
          <div className="about-me-text">
            <p>Hello! I'm JP, a passionate researcher based in Lisbon.</p>
            <p>I specialize in AI and financial engineering. My journey in this field began long ago.</p>
            <p>When I'm not printing, you can find me getting the best haircut.</p>
          </div>
          <div className="about-me-links">
            <a href="https://github.com/seyeint" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/josevaleferreira/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:jpmrvf@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
          <div className="tile-corner bottom-left"></div>
          <div className="tile-corner bottom-right"></div>
        </div>
      </div>
  );
}

export default AboutMe;