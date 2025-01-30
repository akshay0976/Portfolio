import React from 'react'


const ProjectCard = ({ title, main, image, sourceCode, Demo }) => {
    return (
        <>
            <div className='p-2 md:p-3 flex flex-col w-80 bg-[#09134d] shadow-xl shadow-s1ate-900 rounded-2xl'>
                <img className='p-2' src={image} alt="" />
                <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
                    {title}
                </h3>
                <p className="px-4 text-sm md:text-md py-2 text-justify">{main}</p>
                <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'>
                    <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'><a href={sourceCode}>Source Code</a></button>
                    <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'><a href={Demo}>Demo</a></button>
                </div>
            </div>
        </>

    )
}

export default ProjectCard
