import React from 'react';
import { PROJECTS } from '../constants/index';
import { FaDumbbell } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projets = () => {
  return (
    <div className="mt-28 flex flex-col items-center  selection:text-cyan-900">
      {/* Title */}
      <motion.p  whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="mb-20 text-4xl flex">
        Recent <span className="text-gray-500 pl-2">Projects</span>
      </motion.p>

      {/* Projects */}
      {PROJECTS.map((item, index) => (
        <div
          className="flex flex-col sm:flex-row justify-between m-10 gap-8 items-center w-full max-w-3xl mx-auto"
          key={index}
        >
          {/* Image section */}
          <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="sm:w-1/3">
            <img
              src={item.image}
              alt={item.title}
              className="w-36 h-28 rounded-lg shadow-md mx-auto sm:mx-0"
            />
          </motion.div>

          {/* Content section */}
          <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}} className="sm:w-2/3 mt-4 sm:mt-0 ">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, indextech) => (
                <p
                  className="mr-5 bg-gray-900 p-2 rounded-lg text-violet-700 text-sm"
                  key={indextech}
                >
                  {tech}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projets;
