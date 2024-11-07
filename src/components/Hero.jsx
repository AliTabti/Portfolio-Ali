import React from 'react'
import AliProfile from '../assets/portfolio-assets/assets/image_123655411.png'
import { motion } from 'framer-motion'


const Hero = () => {
 
    const container= (delay,duration) => ({
        hidden2 : {x:100 , opacity:0},
         hidden: {x:-100 , opacity:0},
         visible:{
            x:0 ,
            opacity : 1,
            transition :{duration: duration , delay:delay}
         }
        
    })

    

  return (
    <div className='mt-[200px] grid sm:grid-cols-2 gap-10 justify-between items-center selection:text-cyan-900'>
      <div className='flex flex-col items-center sm:items-start'>
        <motion.p variants={container(0,0.5)} initial="hidden" animate="visible" className='text-7xl font-thin'>TABTI ABDELALI</motion.p>
        <motion.p variants={container(0.5,0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight mt-10'>
          Full-Stack Web Developer
        </motion.p>
        
        {/* Ajout du retrait pour les lignes suivantes */}
        <motion.p variants={container(1,0.5)} initial="hidden" animate="visible" className='font-light mt-5 '>I am a passionate front-end developer with a solid understanding of back-end technologies. With experience in building robust and scalable web applications, I have worked extensively with front-end frameworks like React,TailwindCss . Additionally, I have hands-on experience with back-end technologies, including NodeJs,Express .I have solid knowledge about Databases management systems such as MySql and MongoDB which I applied in a recent project. My goal is to combine my front-end expertise with back-end knowledge to create innovative solutions that provide exceptional user experiences and contribute to business growth.</motion.p>
      </div>

      <div className='flex justify-center'>
        <motion.img variants={container(1.2,1)} initial="hidden2" animate="visible" src={AliProfile} className='w-96  h-auto rounded-md'></motion.img>
      </div>
    </div>
  )
}

export default Hero
