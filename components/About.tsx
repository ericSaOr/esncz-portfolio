import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
            About</h3>
            <motion.img 
            initial={{
                x: -200,
            }}
            whileInView={{x:0}}
            src='image.jpg'
            viewport={{once: true}} //makes the animation only run once.
            alt='An image of Eric Sanchez'
            />
    </div>    
  )
}

export default About