import React from 'react'
import Typewriter from 'typewriter-effect'

const Writer = () => {
  return (
    <div>
        <Typewriter
      // onInit={(typewriter)=>{
      //   typewriter.typeString("HI")
      //   .pauseFor(1000)
      //   .deleteAll()
      //   .typeString("This is kalki")
      //   .start()
      // }}
      options={{
        strings:["Full Stack Developer","UI/UX Designer", "Javascript Enthusiast"],
        autoStart:true,
        loop:true
      }}
      />
    </div>
  )
}

export default Writer