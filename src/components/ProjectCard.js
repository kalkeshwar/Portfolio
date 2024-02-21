"use client"
import Image from 'next/image'
import React from 'react'
import {easeInOut, motion} from "framer-motion"
import { GithubIcon } from './Icon'

const ProjectCard = ({num,details}) => {
  const {name,description,url}=details
  return (
   
    <motion.div className='w-[75%] flex flex-col'
      whileInView={{x:[num%2==0?100:-100,0]}}
      transition={{duration:.5, ease:"easeInOut"}}
    > 
      <div className='md:w-full vsm:w-[100%] text-black bg-white h-auto md:p-8 vsm:p-2 rounded-2xl flex relative flex-col md:justify-center md:items-center cursor-pointer border border-black'>
        <div className="relative p-8 rounded-2xl sm:h-[40vh] vsm:h-[20vh] z-30 w-full">
            <Image src="/image.png" layout="fill" objectFit="contain" className='rounded-2xl'/>
        </div>
        <div className="w-full h-auto ">
          {description}
        </div>
        <div className="absolute bg-black top-0 -right-3 -z-20 w-[101%] h-[102%] rounded-3xl"></div>
        <div className="w-full h-8 flex flex-row">
          <GithubIcon className={'h-full  w-[20%]'}/>
          <div className='w-20 h-full bg-black text-white p-2 rounded-md flex justify-center items-center '>Website</div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard