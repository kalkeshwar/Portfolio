"use client"
import React, { useState } from 'react'
import Skills from '@/components/Skills'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import {motion} from 'framer-motion'
import { Education } from '../../../data'

const MobileSkillBox=({name})=>{
  return(
    <div className="p-1 bg-black text-white rounded-md">{name}</div>
  )
}

const About = () => {

  const [ind,setInd]=useState(0);

  const handleIndex=(index)=>{
    setInd(index)
  }

  return (
    <div className='bg-gradient-to-b from-blue-100 to-red-100 flex flex-col'>
      <Navbar/>
      <div className='w-[100vw] h-[90vh] flex flex-col my-10'>
        <div className="font-bold text-6xl w-full text-center">About</div>
        <div className='flex flex-row w-full h-full justify-center items-center'>
          <motion.div className='flex flex-col px-10 gap-10 md:w-1/2 vsm:w-full'
            initial={{y:30}}
            animate={{y:0}}
            transition={{duration: 1, ease:"easeInOut", bounce:0.3}}
          >
              <motion.h2 className='text-xl font-serif font-bold'>A Little more about Me...</motion.h2>
              <motion.div className='font-serif md:text-xl'>Hello! I&apos;m Kalkeshwar Yamsani, a final-year 
                Computer Science student at Sreenidhi Institutes
                of Science and Technology, deeply passionate
                about Web development. Constantly learning new
                technologies, my strengths include attention to
                detail, creativity, and emotional intelligence.
                I thrive on challenges, constantly seeking ways
                to push the boundaries of what&apos;s possible
                in the digital realm. While I&apos;m a perpetual
                learner with a keen eye for detail, my creative
                approach and emotional intelligence are key
                assets. Join me on this exciting journey where
                curiosity meets capability!
              </motion.div>
          </motion.div> 
          {/* profilecard */}
          <div className=" md:w-1/2 h-full p-10 md:flex justify-center items-center vsm:hidden">
              <motion.div className='relative w-[100%] h-[100%] p-24 '
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: 1, type:'spring', bounce:0.3}}
              >
                <Image src="/totalicon.svg" alt='Profile Picture' layout="fill" objectFit='contain' className=''/>
              </motion.div> 
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="border border-black w-[80%] rounded-lg p-5 flex flex-col gap-5">
          <div className='text-4xl font-bold underline'>Education</div>
          <div className="w-full flex flex-row items-center gap-12">{Education.map((item,index)=>(
            <div className={`${index===ind ? 'bg-black text-white rounded-md p-2 font-bold' : 'text-black font-bold'} cursor-pointer`} key={index} onClick={()=>handleIndex(index)}>{item.Course}</div>
          ))}
          </div>
          <div>
            {Education[ind].Institution && (
              <div><span className='font-bold'>Institution : </span> <span>{Education[ind].Institution}</span></div>
            )}
            {Education[ind].Course && (
              <div ><span className='font-bold'>Course : </span> <span>{Education[ind].Course}</span></div>
            )}
            {Education[ind].Stream && (
              <div><span className='font-bold'>Stream : </span> <span>{Education[ind].Stream}</span></div>
            )}
            {Education[ind].year && (
              <div><span className='font-bold'>Year : </span> <span>{Education[ind].year}</span></div>
            )}
            {Education[ind].place && (
              <div><span className='font-bold'>Location : </span> <span>{Education[ind].place}</span></div>
            )}
          </div>
        </div>
      </div>
      <div className='vsm:hidden sm:flex md:flex'>
       <Skills/>
      </div>
      <div className="w-full flex md:hidden">
        <div className='flex flex-row gap-5 flex-wrap'>
          <MobileSkillBox name="javascript"/>
          <MobileSkillBox name="javascript"/>
          <MobileSkillBox name="javascript"/>
          <MobileSkillBox name="javascript"/>
        </div>
      </div>
    </div>
  )
}

export default About