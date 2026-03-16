import React from 'react'

import heroImg from "../assets/images/hero2.jpg"

const Hero2 = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <h1 className="text-white text-4xl sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-semibold leading-[0.95] shadow-font uppercase text-center">
          We Manage <br />{" "}
          <span className="shadow-font">Events & Artist</span>
        </h1>
      </div>
    </section>
  )
}

export default Hero2
