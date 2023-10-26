import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { ShipCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(
    {name: '',
    email: '',
    message: ''}
  );

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_aud531e",
        "template_8jsgav8",
        {
          from_name: form.name,
          to_name: "Manav Sankriti",
          from_email: form.email,
          to_email: "citrineloki7379@gmail.com",
          message: form.message,
        },
        "wLo3O714g1V4PtIel"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden`}>
      <div className='xl:w-1/2 w-full'>
      <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex-[0.75] bg-black-100/75 p-8 rounded-2xl'
      viewport={{amount: "some"}}>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>
            <input type='text' name='name' value={form.name}
            onChange={handleChange} placeholder='What is your name?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>
            <input type='email' name='email' value={form.email}
            onChange={handleChange} placeholder='What is your email?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>
            <textarea rows='7' name='message' value={form.message}
            onChange={handleChange} placeholder='What is your message?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outline-none border-none font-medium'/>
          </label>

          <button type='submit'
          className='bg-tertiary py-3 px-8 outline-none
          w-fit text-white font-bold shadow-md shadow-primary
          rounded-xl'>
            {loading ? 'Sending message' : 'Send Message'}
          </button>
        </form>
      </motion.div>
      </div>

      <div className='xl:w-1/2 w-full xl:flex flex-col-reverse'>
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      viewport={{amount: "some"}}>
        <ShipCanvas />
      </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')