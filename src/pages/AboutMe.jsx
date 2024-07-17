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
          src="/figures/who3.jpg"
          alt="Profile"
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2>Background</h2>
          <p>My foundation in Computer Science, combined with a master's in Data Science, has equipped me with an understanding of algorithmic thinking and autonomy principles.</p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2>Experience</h2>
          <p>Worked as a data scientist, after completing a rigorous training program at Accenture.<br />Stopped to pursue research and presented at an AI conference in Brno, Europe, where my paper on a self-adaptive approach to exploit properties of problem topologies was awarded first place in the <a href="https://link.springer.com/book/10.1007/978-3-031-29573-7" target="_blank" rel="noreferrer noopener">proceedings book</a>.</p>
          <p>This research, focused on evolutionary computation, led to the development of a novel genetic algorithm that outperformed its peers in the IEEE CEC2017 benchmark, with potential implications for re-thinking diversity maintenance during convex search.</p>
          <p>Maintained a parallel focus on financial engineering since 2019. This interest evolved into a venture in market analysis, where specific anomalies across asset price (time series) data were identified during 2021 and exploited successfuly.</p>
          <p>This work combines my expertise in data science and deep learning with practical applications in financial markets. Within this context, I've designed and implemented proprietary pipelines for backtesting, visualization, statistical validation and automation (algorithm deployment and maintenance).</p>
          <p>Short term anomalies experienced alpha decay during the second half of 2023. Long term anomalies are automated and do not require full time monitoring.</p>
          <p>Currently looking for my next mission.</p>
        </motion.section>

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