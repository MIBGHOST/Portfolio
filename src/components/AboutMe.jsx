import aboutmepic from '../assets/nitesh.jpeg'
import React from 'react'
import {motion } from 'framer-motion'

function AboutMe() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y: -100}}
        className='my-20 text-center text-4xl'>
            About 
            <span className='text-neutral-500'>Me</span>
        </motion.h2>
        <div className='flex flex-wrap'>
            <motion.div whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}} 
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={aboutmepic} alt="AboutMe" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.
                    I am a fresher but, I have worked with a variety of technologies, including React, java Spring as well as node.js and MongoDB. 
                    My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
                    I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default AboutMe;