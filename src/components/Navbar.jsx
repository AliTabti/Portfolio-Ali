import React from 'react'
import { FaInstagram , FaGithub , FaLinkedin} from 'react-icons/fa'; // Importation de l'icône Instagram


const Navbar = () => {
  return (
    <div className=' flex justify-between items-center overflow-auto-x-hidden antialiased  selection:text-cyan-900   '>
      <h1 className='font-custom font-bold text-4xl cursor-pointer'>Tabti Abdelali</h1>
      <div className='flex space-x-5'>
        <a href='https://www.instagram.com/ali_____tbti/' target='_blank' ><div className='hover:bg-violet-700 p-1   rounded-full'> <FaInstagram size={30} className='text-white' /></div></a>
        <a href='https://www.linkedin.com/in/tabti-abdelali-2725b0332/' target='_blank'><div className='hover:bg-violet-700 p-1   rounded-full'> <FaLinkedin size={30}/></div></a>
        <a href='https://github.com/AliTabti' target='_blank'><div className='hover:bg-violet-700 p-1   rounded-full'> <FaGithub size={30}/></div></a>

      </div>
    </div>
  )
}

export default Navbar
