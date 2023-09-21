import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
        "Hi! My name is Eric Sanchez!", 
        "I'm a Front-End Developer.",
        "With a passion for coding.",
    ],
    loop: true,
    delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden'>
        <BackgroundCircles />
       {/*eslint-disable-next-line @next/next/no-img-element*/} 
        <img 
        className="relative rounded-full h-32 w-32 mx-auto object-cover text-center overflow-hidden justify-center"
        src='https://www.dropbox.com/scl/fi/e1h32tpikca0y3x9iw01v/IMG_8793.HEIC?rlkey=xr9afso7c37l05vh7p2wiiww8&dl=0'
        alt="An image of Eric Sanchez"
        />
    
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Sofware Developer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10  ">
        <span className='mr-3'>{text}</span>
        < Cursor cursorColor='#F7AB0A'/> 
        </h1>
        <div className="pt-5">
            <Link href="#about">
            <button className="hero-button-class">About</button>
            </Link>
            <Link href="#experience">
            <button className="hero-button-class">Experience</button>
            </Link>
            <Link href="skills">
            <button className="hero-button-class">Skills</button>
            </Link>
            <Link href="Projects">
            <button className="hero-button-class">Projects</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero