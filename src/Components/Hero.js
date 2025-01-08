import React from 'react'

const Hero = () => {
  return (
    <div className='hero h-screen flex flex-col gap-2 items-center justify-center bg-[#0F0F0F] text-white'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-8xl'>Hello, My Name is Jahari</h1>
        <h1 className='text-2xl font-extralight'>Front End Developer / UX</h1>
      </div>
      <div className='scroll-down mt-4 animate-bounce text-2xl md:text-5xl'>&#8595;</div>
    </div>
  )
}

export default Hero