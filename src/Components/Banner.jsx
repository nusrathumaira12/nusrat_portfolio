import React from 'react';
import profileImg from '../assets/Nusrat.png'
import {  FaEye,  FaGithub, FaLinkedin,  FaWhatsappSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Banner = () => {
    return (
        <div className="hero items-start  bg-base-200 min-h-[650px] md:pt-30">
  <div className="hero-content flex-col lg:flex-row-reverse md:mx-40">
   <motion.div
   initial={{ opacity: 0, x: 100 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 2 }}
   > 
   <img
      src={profileImg}
     /></motion.div>
    <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
    
    
    >
      <div className=' w-[90%] pt-5 '>
      <h1 className="text-4xl font-bold">Hello, I am Nusrat Humaira</h1>
      <h3 className="text-3xl font-bold my-10">Web Developer</h3>
      <p className="py-6 ">
      I'm a passionate web developer from Bangladesh. I love turning ideas into  digital solutions using the MERN stack.  I’m dedicated to continuous <br />  learning and building useful, user-friendly applications.
      </p>

      <div className="flex gap-2 mt-3 justify-center lg:justify-start text-3xl text-gray-600">
  <a href="https://github.com/nusrathumaira12" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-gray-700 hover:text-black transition" />
  </a>
  <a href="https://www.linkedin.com/in/nusrat-humaira-926aa0367/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-blue-600 hover:text-blue-700 transition" />
  </a>
  <a
    href="https://wa.me/8801798078234"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsappSquare  className="text-green-500 hover:text-green-600" />
  </a>
</div>

      <motion.div 
       className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      >
      <a
    href="/Email Writing Task (1) 2.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="btn  text-white bg-amber-500 flex items-center gap-2"
  >
     Resume <FaEye />
  </a>
      
      </motion.div>

      </div>
    </motion.div>
  </div>
</div>
    );
};

export default Banner;