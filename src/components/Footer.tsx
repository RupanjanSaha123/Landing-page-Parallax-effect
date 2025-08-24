import React from 'react'
import InstaIcon from "../assets/icons/insta.svg"
import XSocialIcon from "../assets/icons/x-social.svg"
import TicTokIcon from "../assets/icons/tiktok.svg"
import YoutubeIcon from "../assets/icons/youtube.svg"

const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
          <div className="text-center">
             &copy; 2022 Your Company, Inc. All rights reserved.
          </div>
          <ul className='flex justify-center gap-2.5 items-center '>
            <li>
              <InstaIcon />
            </li>
            <li>
              <XSocialIcon />
            </li>
            <li>
              <TicTokIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer