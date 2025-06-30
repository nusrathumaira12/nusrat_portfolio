import React from 'react';
import Banner from './Banner';
import About from './About';
import SkillsSection from './skillsSection';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <div className="bg-base-200">
      <section id="home">
        <Banner />
      </section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <About />
      </motion.section>

      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <SkillsSection />
      </motion.section>

      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <Education />
      </motion.section>

      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <Contact />
      </motion.section>
    </div>
  );
};

export default Home;
