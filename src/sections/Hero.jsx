import React from 'react'
import HeroText from '../components/HeroText'

export default function Hero() {
  return (
    <div data-navbar-theme="dark" className="h-screen w-full lg:p-4 flex justify-center items-center">
      <div className="relative h-full w-full">
        <video
          src="/crowd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full rounded-lg w-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center px-6">
          <div className="w-full my-auto xl:mb-8">
            <HeroText />
          </div>
        </div>
      </div>
    </div>
  )
}
