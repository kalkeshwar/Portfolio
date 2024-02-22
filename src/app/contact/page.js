"use client"
import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import emailJs from "@emailjs/browser"
import Navbar from '@/components/Navbar'

const Contact = () => {

    const text=['s','a','y','\u00A0','h','e','l','l','o','😊']
    const [success,setSuccess]=useState(false)
    const [error,setError]=useState(false)
    const form=useRef()
    
    const emailSend=(e)=>{
        e.preventDefault()
        setError(false)
        setSuccess(false)
        emailJs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
            ()=>{
                setSuccess(true);
                form.current.reset();
            },
            ()=>{
                setError(true);
            }
        )
    }

    return (
        <>
            <Navbar/>
            <div className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 flex md:flex-row vsm:flex-col vsm:p-10'>
                <div className="lg:w-1/2 md:w-[40%] vsm:w-full vsm:h-[50vh] md:h-[100vh] flex justify-center items-center lg:text-6xl md:text-3xl vsm:text-3xl">
                {text.map((item,index)=>(
                    <motion.span key={index}
                    initial={{opacity:1}}
                    animate={{opacity:0}}
                    transition={{delay:index*0.1,ease:"easeInOut",duration:2.5,repeat:Infinity}}
                    >
                        {item}
                    </motion.span>
                ))}
                </div>
                <div className='p-5 vsm:p-0 lg:w-1/2  vsm:w-full vsm:h-auto md:w-[60%] h-auto flex justify-center items-center '>
                    <form ref={form} onSubmit={emailSend} className='lg:w-[90%] md:w-[100%] vsm:w-full h-[85%] sm:p-24 vsm:p-10 bg-red-50 flex flex-col gap-10 text-black rounded-xl'>
                        <span className='font-medium'>Dear Kalkeshwar,</span>
                        <textarea name="user_message" cols={12} rows={6} className=' bg-transparent border-b-2 border-b-black outline-none h-20'></textarea>
                        <span className='font-medium'>Mail address</span>
                        <input type="email" name='user_mail' className='bg-transparent border-b-2 border-b-black outline-none h-5' />
                        <span className='font-medium'>Regards</span>
                        <button className="bg-purple-300 rounded font-semibold text-white p-4">
                            Send
                        </button>
                        {success && (
                            <span className="text-green-600 font-semibold">
                            Your message has been sent successfully!
                            </span>
                        )}
                        {error && (
                            <span className="text-red-600 font-semibold">
                            Something went wrong!
                            </span>
                        )}
                    </form>
                </div>
            </div>
        </>
    
  )
}

export default Contact