import React from 'react'
import AboutImg from '../assets/AboutImg123.png'
import { IoArrowForward } from 'react-icons/io5'

function About() {
    return (
        <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
            <div>
                <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
                <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                    <img className='md:h-80 transition-transform duration-500 ease-in-out transform hover:scale-110' src={AboutImg} alt="" />
                    <ul>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />
                            <span className='w-95'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    I am a dedicated and passionate Frontend Developer with expertise in HTML, CSS, JavaScript, and React. I specialize in crafting visually appealing, responsive, and interactive user interfaces that enhance the overall user experience and engagement.
                                </p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />
                            <span className='w-95'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    As a Backend Developer, I have a strong foundation in Node.js, Express.js, and backend logic development. I focus on building scalable, secure, and efficient server-side applications, ensuring seamless communication between the frontend and database.
                                </p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />
                            <span className='w-95'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                    I have expertise in MongoDB and database management, ensuring optimized data storage, retrieval, and security. My goal is to design efficient database structures that enhance performance and scalability for web applications.
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About
