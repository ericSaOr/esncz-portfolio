import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'> {/*this sticks the header to the top*/}
        <motion.div initial= {{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
        {/*social icons */}
        <SocialIcon 
        url="https:/www.github.com/ericSaOr" 
        fgColor="gray" 
        bgColor="transparent" 
        />
        <SocialIcon url="https:/www.github.com/ericSaOr" 
        fgColor="gray" 
        bgColor="transparent" 
        />
        <SocialIcon 
        url="https:/www.github.com/ericSaOr" 
        fgColor="gray" 
        bgColor="transparent" 
        />
        </motion.div>
        
        <motion.div
          initial={{
            x:500,
            opacity:0,
            scale:0.5,
          }} 
          animate={{
            x:0,
            opacity:1,
            scale:1,
          }}
          transition={{duration: 1}}
        className='flex flex-row items-center text-gray-300 cursor pointer'>
            <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Contact Me!</p>
        </motion.div>
    </header>
    //changed to <header> for SEO 
  )
} 

export default Header