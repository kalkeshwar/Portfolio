"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Skill=({name,x,y})=>{
    return(
        <motion.div className="flex absolute justify-center items-center bg-black text-white px-3 py-3        rounded-full font-semibold cursor-pointer"
         initial={{x:0,y:0}}
         whileInView={{x:x,y:y}}
         transition={{duration:1,ease:"easeInOut"}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <div className='w-screen h-auto flex flex-col '>
        <div className="w-full font-semibold text-6xl h-40 flex items-center justify-center underline">Skills</div>
        <div className="w-full h-screen relative flex justify-center items-center bg-radiantcircularpattern rounded-full">
            <motion.div className="flex justify-center items-center bg-black text-white p-5 rounded-full font-semibold cursor-pointer">web</motion.div>
            <Skill name="CSS" x="-13vw" y="5vw"/>
            <Skill name="Javascript" x="-5vw" y="-8vw"/>
            <Skill name="ReactJs" x="19vw" y="6vw"/>
            <Skill name="NodeJs" x="0vw" y="11.5vw"/>
            <Skill name="ExpressJs" x="-19vw" y="-15vw"/>
            <Skill name="HTML 5" x="12vw" y="-9vw"/>
            <Skill name="Tailwind CSS" x="33vw" y="-5vw"/>
            <Skill name="NextJs" x="0vw" y="-21vw"/>
            <Skill name="Typescript" x="-29vw" y="0vw"/>
            <Skill name="framer-motion" x="16vw" y="16vw"/>
            <Skill name="Docker" x="-35vw" y="-9vw"/>
            <Skill name="Chakra UI" x="-16vw" y="17vw"/>
            <Skill name="Redux" x="-25vw" y="10vw"/>
            <Skill name="Material UI" x="20vw" y="-18vw"/>
            {/* <Skill name="framer motion" x="-18vw" y="18vw"/> */}
        </div>
    </div>
  )
}

export default Skills