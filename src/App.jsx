import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projets from './components/Projets'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className='relative min-h-screen'>
      <div className='fixed inset-0 -z-10 w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>

      <Navbar />
      <Hero />
      <About/>
      <Technologies/>
      <Projets/>
      <Contact/>
    </div>
  )
}

export default App
