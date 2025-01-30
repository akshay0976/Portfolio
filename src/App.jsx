import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
