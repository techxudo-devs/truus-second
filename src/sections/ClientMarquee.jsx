import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee"; // 1. Import Marquee

import cloud from "../assets/svgs/cloud3.svg"
import bts from "../assets/svgs/bts.svg"
import RoundedArrow from '../SvgComponents/RoundedArrow';
import Popup from '../SvgComponents/Popup.jsx';

import pepsi from "../assets/images/pepsi.png"
import unilever from "../assets/images/unilever.png"
import nestle from "../assets/images/nestle.png"
import coca from "../assets/images/coca.png"
import pg from "../assets/images/pg.png"
import recit from "../assets/images/recit.png"
import national from "../assets/images/national.png"
import engro from "../assets/images/engro.png"
import { FaLastfmSquare } from 'react-icons/fa';

const column1Logos = [
    { name: 'Pepsi', src: pepsi, bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { name: 'Unilever', src: unilever, bgColor: 'bg-teal-600' },
    { name: 'Nestle', src: nestle, bgColor: 'bg-gradient-to-br from-blue-200 to-blue-400' },
    { name: 'Coca Cola', src: coca, bgColor: 'bg-gradient-to-br from-red-200 to-red-500' },
];

const column2Logos = [
    { name: 'Procter & Gamble', src: pg, bgColor: 'bg-blue-300' },
    { name: 'Reckitt Benckiser', src: recit, bgColor: 'bg-pink-700' },
    { name: 'National Foods', src: national, bgColor: 'bg-red-600' },
    { name: 'Engro Corporation', src: engro, bgColor: 'bg-lime-200' },
];

const ClientsMarquee = () => {
    const duplicatedCol1 = [...column1Logos, ...column1Logos];
    const duplicatedCol2 = [...column2Logos, ...column2Logos];

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1280);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="works" data-navbar-theme="light" className="relative w-full px-10 lg:pr-10 min-h-screen bg-gradient-to-b from-[#015696] to-[#00192b] flex items-center overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full ">

                {/* --- Left Static Section --- */}
                <div className=" h-96 flex justify-center items-center overflow-visible epilogue font-extrabold">
                    <img className='absolute w-96 h-96 top-[30%] lg:top-[50%] -translate-y-1/2 left-0' src={cloud} alt="" />
                    <div className="relative z-20 text-center lg:translate-x-20 perspective-dramatic transform-3d">
                        <h2 className="text-5xl md:text-6xl font-extrabold shadow-font leading-tight text-white">
                            proud to have <br />
                            <b className="font-extrabold">worked</b><span className=' ml-2 shadow-font font-light'>with:</span>
                        </h2>
                        <div className="absolute -bottom-[150%] lg:-bottom-[100%] right-20 lg:-rotate-12">
                            <Popup className='w-16 lg:w-20 z-10 relative -rotate-10'>
                                <img src={bts} className='w-full h-full' alt="" />
                            </Popup>
                            <RoundedArrow className='z-0 translate-x-9 rotate-[50deg] lg:rotate-[30deg] w-40 lg:w-60 lg:rotate-x-180 transform-3d perspective-midrange ' />
                        </div>
                    </div>
                </div>

                {/* --- Desktop Vertical Marquee --- */}
                {/* CHANGE: Reduced 15s to 5s for much faster speed */}
                <div className="relative h-[500px] flex gap-4 md:gap-6 overflow-hidden mask-image-gradient max-lg:hidden ">
                    <div className='absolute top-0 h-24 w-full bg-gradient-to-b from-[#015696] to-transparent z-10'></div>
                    
                    {/* Speed changed to 5s here */}
                    <div className=" flex flex-col gap-3 animate-[marquee-up_5s_linear_infinite]">
                        {duplicatedCol1.map((item, index) => (
                            <div key={`col1-${index}`} className={`w-40 h-40 md:w-48 md:h-48 rounded-xl flex items-center justify-center p-4 shadow-lg shrink-0 ${item.bgColor}`}>
                                <img src={item.src} alt={item.name} className="h-full w-full object-contain filter drop-shadow-lg" />
                            </div>
                        ))}
                    </div>

                    {/* Speed changed to 5s here */}
                    <div className=" flex flex-col gap-3 md:gap-4 animate-[marquee-down_5s_linear_infinite]">
                        {duplicatedCol2.map((item, index) => (
                            <div key={`col2-${index}`} className={`w-40 h-40 md:w-48 md:h-48 rounded-xl flex items-center justify-center p-4 shadow-lg shrink-0 ${item.bgColor}`}>
                                <img src={item.src} alt={item.name} className="w-full h-full object-contain filter drop-shadow-lg" />
                            </div>
                        ))}
                    </div>
                    
                    <div className='absolute bottom-0 h-24 w-full bg-gradient-to-t from-[#00192b] to-transparent z-10'></div>
                </div>

                {/* --- Mobile/Tablet Horizontal Marquee --- */}
                {!isDesktop && (
                    <div className='w-full mt-24 lg:hidden flex flex-col gap-4'>
                        {/* CHANGE: Speed 150 is very fast, pauseOnHover set to true */}
                        <Marquee speed={150} gradient={false} pauseOnHover={true}>
                            {column1Logos.map((item, index) => (
                                <div key={`mar1-${index}`} className={`w-32 h-32 mx-2 rounded-xl flex items-center justify-center p-4 shadow-lg ${item.bgColor}`}>
                                    <img src={item.src} alt={item.name} className="h-full w-full object-contain filter drop-shadow-lg" />
                                </div>
                            ))}
                        </Marquee>

                        <Marquee speed={150} gradient={false} direction="right" pauseOnHover={true}>
                            {column2Logos.map((item, index) => (
                                <div key={`mar2-${index}`} className={`w-32 h-32 mx-2 rounded-xl flex items-center justify-center p-4 shadow-lg ${item.bgColor}`}>
                                    <img src={item.src} alt={item.name} className="h-full w-full object-contain filter drop-shadow-lg" />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ClientsMarquee;