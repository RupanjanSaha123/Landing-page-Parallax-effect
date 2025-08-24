"use client"
import React, { useRef } from 'react'
import helixImage from "../assets/images/helix2.png"
import emojiStarImage from "../assets/images/emojistar.png" 
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <div className='bg-black text-white py-[72px] sm:py-24 text-center overflow-x-clip' ref={containerRef}>
      <div className="container max-w-xl relative">
        <motion.div
          style={{
            translateY: translateY
          }}
        >
          <Image 
            src={helixImage} 
            alt="Helix" 
            className="absolute top-6 left-[calc(100%+36px)]" 
          />
        </motion.div>
        <motion.div 
          style={{
            translateY: translateY
          }}
        >
          <Image 
            src={emojiStarImage} 
            alt="Star" 
            className="absolute -top-[120px] right-[calc(100%+24px)]" 
          />
        </motion.div>
        <h2 className='text-5xl sm:text-6xl font-bold tracking-tighter'>
          Get instant access
        </h2>
        <p className='text-xl text-white/70 mt-5'>
          Celebrate the joy of accomplishment with an app designed to track progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
          <input type="email" placeholder="your@email.com" className='h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1' />
          <button className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
        </form>
      </div>
    </div>
  )
}

export default CallToAction