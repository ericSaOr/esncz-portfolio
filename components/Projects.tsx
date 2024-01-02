import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5]
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
    justify-evenly mx-auto items-center z-0">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'
        >Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 '>
          <img src="https://unsplash.com/photos/a-laptop-and-a-potted-plant-IqBY9blj8Ks"
          alt="A laptop and a potted plant."/>
          <div>
            <h4>Project 1: Heck Yeah!</h4>
            </div>

        </div>
        <div className='w-full absolute top-[30%] bg-[#FFC0CB]/10 left-0 h-[500px]
        -skew-y-12'/>
    </div>
  )
}

export default Projects