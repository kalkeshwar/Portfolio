import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="">
        <Link href={"/"}>
            <motion.div className="rounded-full bg-black text-white font-bold w-10 h-10 flex justify-center items-center cursor-pointer"
            whileHover={{backgroundColor:["#121212","rgba(131,58,180,1)","rgba(252,176,69,1)","rgba(256,10,32,2)","#121212"],transition:{duration:.5,repeat:Infinity}}}
            >
                KY
            </motion.div>
        </Link>
    </div>
  )
}

export default Logo