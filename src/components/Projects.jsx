import React from 'react'
import ProjectCard from './ProjectCard'
import Gemini from "../assets/Gemini.png"
import News from "../assets/News-Mag.png"
import eCommerce from '../assets/eCommerce.png'

const Projects = ({ title, main, image, sourceCode, Demo }) => {
    return (
        <div
            id="Projects"
            className="text-white md:flex flex-col  overflow-hidden md:flex-wrap mx-5 md:mx-20 bg-opacity-90 rounded-2xl p-10"
        >
            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg mb-6">
                Projects
            </h1>

            {/* Project Cards Container */}
            <div className="w-full flex flex-wrap  gap-6 ">
                <div className='bg-opacity-90 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105'>
                    <ProjectCard
                        image={Gemini}
                        title="Gemini"
                        main="Gemini is a cutting-edge AI model built for natural language understandin and generation.It efficiently processes user prompts to produce coherent, context-aware responses with advanced features like formatting, structuring."
                        sourceCode={"https://github.com/akshay0976/Gemini-Clone"}
                        Demo={'https://gemini-clone-two-rouge.vercel.app/'}
                    />
                </div>
                <div className='bg-opacity-90 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105' >
                    <ProjectCard
                        image={News}
                        title="News-Mag"
                        main="This project is ideal for news platforms, blogs, or any app that needs to display articles or news snippets in a clean and organized way.
                    The card has a modern, dark-themed design that is responsive, making it suitable for various screen sizes."
                        sourceCode={'https://github.com/akshay0976/News-Mag'}

                    />
                </div>
                <div className='bg-opacity-90 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105'>
                    <ProjectCard
                        image={eCommerce}
                        title=" eCommerce"
                        main="Furtinoz, features a clean and modern design, focusing on minimalistic and functional interior decor. The homepage highlights trending furniture for 2025, with an inviting Shop Now button for easy navigation."
                        sourceCode={"https://github.com/akshay0976/Furniture"}
                        Demo={"https://furniture-lyart-pi.vercel.app/Home"}
                    />
                </div>
            </div>
        </div>

    )
}

export default Projects
