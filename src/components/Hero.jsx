import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ParametricSphereCanvas } from './canvas';

import { WindupChildren, Pace } from 'windups';

const Hero = () => {
  return (
    <section className='relative w-full h-[500px] mx-auto'>
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[100px] max-w-7xl 
      mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center 
        items-center mt-5 bg-transparent'>
          <div className='w-5 h-5 rounded-full bg-[#8499e3]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div className='bg-transparent'>
          <WindupChildren>
          <Pace ms={25}>
          <h1 className={`${styles.heroHeadText} text-white`}> 
          Hi, I am <span className='text-[#8499e3]'>Manav</span></h1>
          </Pace>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A second year undergraduate 
            <br /> at Imperial College London.
          </p>
          </WindupChildren>
        </div>
      </div>

      <div className='relative w-full h-full min-h-[800px] flex-col fixed'>
          <ParametricSphereCanvas className='flex-row fixed'/>
      </div>
    </section>
  )
}

export default Hero