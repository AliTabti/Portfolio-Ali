import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='mt-28 text-center flex-c leading-10  selection:text-cyan-900'>
      <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='text-4xl mb-8' >Contact <span className='text-gray-500 pl-2'>Me</span></motion.p>
      <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x: -100}} transition={{duration:1.5}}>Tabti Abdelali</motion.p>
      <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:40}} transition={{duration:1.5}}>+213 555 27 35 58</motion.p>
      <motion.a   className='border-b' href="mailto:ma_tabti@esi.dz" target='_blank' >ma_tabti@esi.dz</motion.a>
    </div>
  )
}

export default Contact
