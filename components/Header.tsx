import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20'> {/*this sticks the header to the top*/}
        <div className='flex flex-row items-center'>
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
        </div>

        <div className='flex flex-row items-center text-gray-300 cursor pointer'>
            <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Contact Me!</p>
        </div>
    </header>
    //changed to <header> for SEO 
  )
} 

export default Header