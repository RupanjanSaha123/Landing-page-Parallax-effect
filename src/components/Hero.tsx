"use client"
import Link from 'next/link'
import React from 'react'
import ArrowWIcon from "../assets/icons/arrow-w.svg"
import cursorImage from "../assets/images/cursor.png"
import messageImage from "../assets/images/message.png"
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip'>
      <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2  bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link href="#" className="inline-flex gap-3 border py-1 px-2 rounded-full border-white/20">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F082,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">Version 2.0 is here</span>
            <span className='inline-flex items-center gap-1'>
              <span>
                Read More
              </span>
              <ArrowWIcon />
            </span>
          </Link>
        </div>
        <div className='flex justify-center'>
          <div className='inline-flex relative'>
            <h1 className='text-7xl sm:text-9xl tracking-tighter font-bold text-center mt-8 inline-flex'>
              One Task <br /> at a Time
            </h1>
            <motion.div className="absolute right-[476px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image 
                src={cursorImage} 
                alt="" 
                height="200" 
                width="200" 
                className='max-w-none'
                draggable='false'
              />
            </motion.div>
            <motion.div className='absolute top-[56px] left-[498px] hidden sm:inline'
              drag
              dragSnapToOrigin
            >
              <Image 
                src={messageImage} 
                alt="" 
                height="200" 
                width="200" 
                className='max-w-none' 
                draggable='false'
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className='text-center text-xl mt-8 max-w-md'>
            Celebrate the joy of accomplishment with an app designed to track progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Get for free</button>
        </div>
      </div>
      
    </div>
  )
}

export default Hero