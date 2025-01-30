import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { RiGithubFill } from "react-icons/ri"

function Footer() {
    return (
        <>
            <div id='Contact' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center mt-3'>
                <div>
                    <h1 className='text-2xl md:text-6xl fond-bold'>Contact</h1>
                    <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out!</h3>
                </div>
                <ul className="text-sm md:text-xl list-none">
                    <li className='flex gap-1 items-center'><MdOutlineEmail size={20} />
                        akshay851204@gmail.com
                    </li>
                    <li className='flex gap-1 items-center'>
                        <CiLinkedin />
                        <a href="https://www.linkedin.com/in/akshay-kumar-099319250/">Linkedin</a>
                    </li>
                    <li className='flex gap-1 items-center'>
                        <RiGithubFill size={20} />
                        <a href="https://github.com/akshay0976">GitHub</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Footer
