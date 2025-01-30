import React from 'react'

import companyLogo from "../assets/company.jpeg";
import project from '../assets/project.png';


function Experience() {
  return (
    <div id='Experience' className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Internship</h1>
      <div className='flex flex-wrap items-center justify-around'>
        <div>
          <div className='flex gap-10 bg-opacity-45 mt-0 rounded-lg p-4 items-center justify-start'>
            <img width={130} src={companyLogo} alt="" />
            <span className='text-white'>
              <h2 className='leading-tight'>Frontend Developer, Intern</h2>
              <p className='text-sm leading-tight font-thin'>Aug 2023 - Sept 2023</p>
              <div className='mt-4'>
                <p className='text-white text-base'>-Work as an Frontend Intern</p>
                <p className='text-white text-base'>-Work on a project Fitness Studio website </p>
              </div>
            </span>
          </div>
        </div>

        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
          <img className="transition-transform duration-300 hover:scale-105 hover:opacity-80" width={400} src={project} alt="" />
          <a className="px-4 py-1 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300" href=" https://studiofitness.netlify.app/">Visit</a>
        </div>
      </div>
    </div >
  )
}

export default Experience
