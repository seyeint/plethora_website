import React from 'react';
import { motion } from 'framer-motion';

function Why() {
  return (
    <div className="why-container">
      <motion.div
        className="why-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="why.jpg" // e path
          alt="Why"
          className="why-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        <motion.p
          className="quote"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          How does knowing that no one has the answers affect your mental model of yourself, other individuals, groups or zeitgeists?
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Do your thing.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          This site is designed for compartmentalizing both old and new content, focusing on topics related to my work, projects or general interests.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Sharing is caring, but unfortunately I'm doing this for myself.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Why;