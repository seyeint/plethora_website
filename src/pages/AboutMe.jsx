import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

function AboutMe() {
  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/who.jpg"
          alt="Profile"
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Hello! I'm JP, a passionate researcher based in Lisbon.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          I specialize in AI and financial engineering. My journey in this field began long ago.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          When I'm not printing, you can find me getting the best haircut.
        </motion.p>

        <motion.div
          className="about-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a href="https://github.com/seyeint" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="mailto:jpmrvf@gmail.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutMe;