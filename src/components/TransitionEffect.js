"use client"
import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 w-screen h-screen bg-purple-200 z-30'
        initial={{x:"100",width:"100%"}}
        animate={{ x: "0%", width: "0%" }}
        transition={{ ease: "easeInOut", duration: .5, delay: 0 }}
        >
        </motion.div>
        <motion.div className='fixed top-0 bottom-0 w-full h-screen bg-white z-20'
        initial={{x:"100",width:"100%"}}
        animate={{ x: "0%", width: "0%" }}
        transition={{ ease: "easeInOut", duration: .5, delay: .14 }}
        >
        </motion.div>
        <motion.div className='fixed top-0 bottom-0 w-full h-screen bg-black z-10'
        initial={{x:"100",width:"100%"}}
        animate={{ x: "0%", width: "0%" }}
        transition={{ ease: "easeInOut", duration: .5, delay: .19 }}
        >
        </motion.div>
    </>
  )
}

export default TransitionEffect