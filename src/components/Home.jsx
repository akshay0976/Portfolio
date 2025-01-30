import React from 'react'
import avatarImg from "../assets/Main.png"
import TextChange from './TextChange'

function Home() {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-4xl font-bold flex leading-normal tracking-tighter'><TextChange /></h1>
        <p className='text-xl md:text-xl tracking-tight'>I'm a passionate Full-Stack developer with a strong foundation in HTML, CSS, JavaScript,React,Node,Express,MongodB dedicated to crafting visually appealing and user-friendly web experiences. With a keen eye for design and a focus on responsive, high-performance websites, I specialize in building intuitive interfaces that enhance user engagement.</p>
        <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] '>Contact Me</button>
      </div>
      <div className="transition-transform duration-500 ease-in-out transform hover:-translate-x-10"><img className='w-95 ' src={avatarImg} alt="" /></div>
    </div>
  )
}

export default Home
