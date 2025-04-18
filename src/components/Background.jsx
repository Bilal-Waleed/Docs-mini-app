import React from 'react'

const Background = () => {
  return (
    <>
    <div className='z-[2] w-full h-screen'></div>
    <div className='absolute top-[5%] w-full text-zinc-500 flex justify-center py-10 text-xl text-semibold'>Documents</div>
    <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zinc-900 text-[12vw] font-bold tracking-tighter '>Docs.</h1>
    </>
  )
}

export default Background