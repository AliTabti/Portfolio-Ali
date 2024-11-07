import React from 'react';
import { SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiMysql, SiPython, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';

const Technologies = () => {

  // Définir les variantes pour l'animation
  const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="mt-28 px-4s">
      {/* Title */}
      <motion.p  className="text-4xl flex justify-center selection:text-cyan-900">
        Technologies<span className="text-gray-500 pl-2">Used</span>
      </motion.p>

      {/* Icons */}
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10 text-5xl justify-items-center mt-20">
        <motion.div
          variants={iconVariant(2.5)} // Appliquer les variantes ici
          initial="initial"
          animate="animate">  <SiReact className="text-[#61DAFB]" size="65" title="React" />
        </motion.div>
        <motion.div
          variants={iconVariant(6)} // Appliquer les variantes ici
          initial="initial"
          animate="animate"><SiTailwindcss className="text-[#38BDF8]" size="65" title="Tailwind CSS" /></motion.div> 
        <motion.div
          variants={iconVariant(4)} // Appliquer les variantes ici
          initial="initial"
          animate="animate"><SiJavascript className="text-[#F7DF1E]" size="65" title="JavaScript" /></motion.div> 
       <motion.div
          variants={iconVariant(3)} // Appliquer les variantes ici
          initial="initial"
          animate="animate"> <SiNodedotjs className="text-[#339933]" size="65" title="Node.js" /></motion.div> 
        <motion.div
          variants={iconVariant(5)} // Appliquer les variantes ici
          initial="initial"
          animate="animate"><SiMysql className="text-[#00758F]" size="65" title="MySQL" /></motion.div>
       <motion.div
          variants={iconVariant(2)} // Appliquer les variantes ici
          initial="initial"
          animate="animate"> <SiPython className="text-[#3776AB]" size="65" title="Python" /></motion.div>
       <motion.div
          variants={iconVariant(6)} // Appliquer les variantes ici
          initial="initial"
          animate="animate"><SiMongodb className="text-[#47A248]" size="65" title="MongoDB" /></motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
