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
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
        I am a keen and durable plank of wood.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");