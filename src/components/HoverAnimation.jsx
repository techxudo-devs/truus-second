import React from 'react'
import { motion } from 'framer-motion'
export default function HoverAnimation({ hover, setHover, title }) {
    return (
        <div className="relative cursor-pointer work-container group"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>

            {title}
            {/* Dropdown with framer-motion */}
            <motion.div
                animate={{ height: hover ? "auto" : 0, width: hover ? "300px" : 0, opacity: hover ? 1 : 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-stone-100 rounded-2xl shadow-xl absolute -top-2 -left-5 overflow-hidden  p-6 pt-10 "
            >
                <ul className="space-y-4 mt-4 ">

                    {workItems.map((item, i) => (
                        <motion.li

                            animate={{ y: hover ? 0 : 100 }}
                            transition={{ duration: (i + 0.2) / 6, ease: "easeInOut" }}
                            exit={{ y: 0 }}
                            key={item.title}
                            className="flex items-center gap-4 cursor-pointer group"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                                <span className="text-sm text-purple-600 font-semibold">
                                    {item.brand}
                                </span>
                                <p className="font-medium group-hover:underline">{item.title}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
                <motion.button
                    transition={{ duration: (3 + 0.2) / 7, ease: "easeInOut" }}
                    animate={{ y: hover ? 0 : 100 }}
                    exit={{ y: 0 }}
                    className="mt-6 w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                    All our work
                </motion.button>
            </motion.div>
        </div>
    )
}
