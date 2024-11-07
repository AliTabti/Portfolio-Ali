import React from 'react';
import AboutImg from '../assets/portfolio-assets/assets/about.png';
import { motion } from 'framer-motion';

const About = () => {
    const container= (delay,duration) => ({
        hidden2 : {x:80 , opacity:0},
         hidden: {x:-100 , opacity:0},
         visible:{
            x:0 ,
            opacity : 1,
            transition :{duration: duration , delay:delay}
         }
        
    })

  return (

    <div className="mt-28 px-4 sm:px-8  selection:text-cyan-900">
      {/* Title */}
      <motion.p  whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="text-4xl flex justify-center">
        About<span className="text-gray-500 pl-2">Me</span>
      </motion.p>

      {/* Content */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <motion.img whileInView="visible" variants={container(0.5,0.5)} initial="hidden" 
            src={AboutImg}
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-md"
            alt="About Me"
          />
        </div>

        {/* Text Section */}
        <div className=" ">
          <motion.p whileInView="visible" variants={container(0.5,0.5)} initial="hidden2" >
            I am a dedicated and versatile 3rd-year Computer Science student with a passion for creating efficient and user-friendly web applications. With hands-on experience in front-end technologies like React, and Tailwind, as well as back-end tools like Python, Node.js, and Express, I am constantly expanding my skills and knowledge. 
          </motion.p>
          <motion.p whileInView="visible" variants={container(0.5,0.5)} initial="hidden2"  className="mt-4">
            My journey into web development started with a deep curiosity about how technology works, and it has grown into a drive to solve real-world problems through innovative web solutions. I thrive in collaborative environments, enjoying the challenge of tackling complex problems and delivering high-quality results.
          </motion.p  >
          <motion.p whileInView="visible" variants={container(0.5,0.5)} initial="hidden2"  className="mt-4">
            As I continue to develop my expertise in both front-end and back-end technologies, I am excited about the opportunity to contribute to impactful projects. Outside of coding, I am always exploring new technologies and staying active in the tech community.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
