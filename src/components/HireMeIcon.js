'use client'
import React from 'react'
import { CircularIcon } from './Icon'

const HireMeIcon = () => {
  return (
    <div className='flex bg-green relative w-[15rem] h-[15rem] overflow-hidden' >
      <CircularIcon className={'w-full h-auto fill-dark animate-spin-slow'}/>
      <div className='absolute top-20 left-20 rounded-[50%] bg-black text-white font-medium w-20 h-20 flex justify-center items-center'>HireMe</div>
    </div>
  )
} 

export default HireMeIcon