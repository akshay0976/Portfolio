import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiPython, SiMysql, SiTailwindcss, SiGit, SiVercel, SiBootstrap } from "react-icons/si";
import { RiNodejsFill, RiDatabaseFill, RiBarChartFill } from "@remixicon/react";

function Skills() {
    return (
        <div className='w-11/12 bg-black m-auto pb-10 shadow-xl bg-opacity-30 rounded-lg overflow-hidden'>
            <div className='text-2xl md:text-4xl text-white font-bold p-10'><h1>Skills</h1></div>
            <div className='flex justify-between gap-40  w-full text-white items-center '>
                <div className='w-1/2 ps-14 text-justify'>
                    <h1 className="text-6xl font-serif font-bold leading-tight bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent">
                        <span className="text-8xl">M</span>ERN <span className="text-8xl">S</span>tack
                    </h1>
                    <p className="text-left text-lg text-gray-300 leading-relaxed">
                        The <span className="font-semibold text-white">MERN Stack</span> is a popular JavaScript-based full-stack development framework consisting of:
                    </p>
                    <ul className="list-disc list-inside text-left text-lg text-gray-300 mt-3 space-y-2">
                        <li><span className="font-semibold text-white">MongoDB</span> – NoSQL database for flexible data storage.</li>
                        <li><span className="font-semibold text-white">Express.js</span> – Lightweight backend framework for handling routes & APIs.</li>
                        <li><span className="font-semibold text-white">React.js</span> – Frontend library for building interactive user interfaces.</li>
                        <li><span className="font-semibold text-white">Node.js</span> – JavaScript runtime for executing backend logic.</li>
                    </ul>
                    <p className="text-left text-lg text-gray-300 mt-4">
                        <span className="font-semibold text-white">MERN</span> enables end-to-end JavaScript development, making it an efficient choice for modern web applications.
                    </p>

                </div>
                <div className='flex flex-wrap gap-5 justify-center items-center md:w-1/2 pe-70 pt-10 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105' >
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaHtml5 color='#E34F26' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaCss3 color='#1572b6' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaJs color='#F7DF1E' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaReact color='#61DAFB' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <RiNodejsFill size={50} color="#68A063" />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiExpress color='#E34F26' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiMongodb color='#47A248' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiPython color="#3776AB" size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiMysql color="#4479A1" size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <RiBarChartFill size={50} color="#F2C811" />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiTailwindcss size={50} color="#F2C811" />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiBootstrap size={50} color="#F2C811" />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiGit size={50} color="#F2C811" />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FiGithub size={50} color="#F2C811" />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        < SiVercel size={50} color="#F2C811" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skills



