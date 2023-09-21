import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
 <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
 >
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
            About
            </h3>

            <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{opacity: 1, x:0}}
            src='image.jpg'
            viewport={{once: true}} //makes the animation only run once. 
            alt='An image of Eric Sanchez'
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
            md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] items-center"
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                  Here is a{' '} <span className="underline decoration-[#d52163ab]">little</span> background</h4>
            </div>
            <p className='text-base'>
            Lorem ipsum dolor sit amet. Eum odio nostrum ad nulla ipsa est laborum consequatur ut animi ullam et nihil eius sed itaque impedit. Et sequi expedita qui sint aspernatur a debitis quod. 33 architecto minima et inventore dicta vel dolorem amet qui doloremque sint aut quam dolores sit exercitationem officia eum perferendis sapiente.
Est amet quis qui dolor enim qui quia minus aut enim omnis vel sunt dolores! Et explicabo libero cum dicta rerum ea voluptatem placeat qui doloremque maxime aut aliquid dolorem a facilis voluptas non dolorem sint. Eos ipsum sunt eum mollitia facilis et totam cupiditate qui enim aliquam in optio minus ut nostrum aliquam.
Vel rerum asperiores qui dolor tempora et illo vero et sunt aliquid quo veniam rerum! Cum fuga rerum ut tempora aliquam ut accusantium optio cum saepe debitis qui aspernatur aperiam. Quo expedita repellendus eum corrupti magnam qui cumque quos ea facilis voluptas est obcaecati aliquam est ipsa Quis qui optio velit? Qui reiciendis nisi At dolores nihil et soluta harum eum quam voluptatem et provident sunt ab voluptas dolores!
            </p>
      </div> 
    </motion.div>   
  )
}

export default About