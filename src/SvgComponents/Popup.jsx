import React from 'react'
import { motion } from "framer-motion"
export default function Popup({ children, className }) {
    return (
        <motion.div
            className={className}
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    )
}
