import React from 'react';
import { motion } from 'framer-motion';

import {styles} from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl'>
        I am a highly skilled and driven Computer Science 
        student with a passion for learning and teaching.
        I am Experienced with Python, C, Java and Haskell both in team
        projects and in teaching.  I thrive in collaborative team
        environments to build performant, scalable and robust
        solutions to interesting problems. I am currently an
        Undergraduate Teaching Assistant at Imperial College London, 
        where I teach First-Year programming in lab sessions, and I am pursuing 
        a Software Engineering Internship for the summer of 2024.
        <br></br> <br></br>
        Outside of Computer Science I am a Seargent in the Boys' Brigade, where I 
        actively engage and lead fun activities every Friday night for the boys in the Company. I also
        enjoy playing Badminton and online Strategy games like Civilization 6.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");