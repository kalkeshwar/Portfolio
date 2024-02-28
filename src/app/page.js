"use client"
import React from 'react'
import HireMeIcon from '@/components/HireMeIcon'
import Navbar from '@/components/Navbar'
import TransitionEffect from '@/components/TransitionEffect'
import Image from 'next/image'
import Writer from '@/components/Writer'
import Link from 'next/link'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <>
      <TransitionEffect/>
      <div className=" w-screen h-auto bg-gradient-to-b from-blue-100 to-red-100 px-1">
          <Navbar/>
          <div className='w-[100vw] md:h-[75vh] vsm:h-[100vh] flex flex-col py-2 md:flex-row'>
            <motion.div className="h-1/2 md:h-full md:w-1/2 lg:w-1/2 relative">
              <Image src="/image.png" alt='Profile Picture' layout='fill' objectFit='contain' className='z-10'/>
            </motion.div>
            {/* break */}
            <motion.div className="flex flex-col justify-center my-8 gap-2 md:gap-10 vsm:justify-center vsm:pl-3 md:w-1/2"
              initial={{y:20}}
              animate={{y:0}}
              transition={{duration:1,staggerChildren:.5}}
            >
              <div className="flex flex-col gap-5 md:gap-8">
                <div className=' text-3xl vsm:text-2xl font-large'>Hi, I am</div>
                <div className='text-5xl vsm:text-3xl font-extrabold'>Kalkeshwar Yamsani</div>
                <div className='text-3xl font-medium'><Writer/></div>
              </div>
              <div className='text-md flex flex-wrap p-2 font-medium justify-center items-start vsm:my-3'>
                Crafting the Designs into Real world entities.passion for coding ,creating innovative and user-friendly web applications and a knack for understanding user needs.
              </div>
              <div className='w-full flex items-center gap-20 pr-20 my-3 vsm:px-2'>
                <button className='bg-black text-white px-1 py-1 rounded-md w-24 h-12'><Link href='https://drive.google.com/file/d/1KKkXDqXTS84upAZzo3ru_pEcOQ1MBkpf/view?usp=sharing' target='__blank'>Resume</Link></button>
                <button className='bg-white text-black px-1 py-1 rounded-md w-24 h-12'><Link href="/contact">Contact</Link></button>
              </div>
            </motion.div>
          </div>
          <HireMeIcon/>
      </div>
    </>
  );
}


