

import React from 'react';
import { motion } from 'framer-motion';

/**
 * A reusable component that animates the drawing of multiple SVG paths,
 * each with its own potential duration and delay, when it enters the viewport.
 * 
 * @param {Array<Object>} paths - An array of path objects. Each object must have a 'd' property (string)
 *                                and can have optional 'duration' and 'delay' properties (number).
 * @param {string} viewBox - The 'viewBox' attribute of the parent <svg> tag.
 * @param {string} width - The width of the SVG container (e.g., '100%', '250px').
 * @param {string} color - The color applied to all path strokes.
 * @param {number} strokeWidth - The thickness applied to all path strokes.
 * @param {string} className - Custom classes for positioning and styling.
 */
const AnimatedSvgPath = ({
    reversed = false,
    paths,
    viewBox,
    width = "",
    color = "#fff",
    strokeWidth = 2,
    className = ""
}) => {
    // A check to ensure the essential props are provided.
    if (!paths || paths.length === 0) {
        console.error("AnimatedSvgPath component requires a non-empty 'paths' array prop.");
        return null;
    }

    if (!viewBox) {
        console.error("AnimatedSvgPath component requires a 'viewBox' prop.");
        return null;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            viewBox={viewBox}
            fill="none"
            className={className}
        >
            {/* Map over the paths array to create an animated path for each entry */}
            {paths.map((path, index) => (
                <motion.path
                    key={index} // Using index is safe for static lists
                    d={path.d}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"

                    // --- Standard animation triggers ---
                    initial={{ pathLength: reversed ? 1 : 0 }}
                    whileInView={{ pathLength: reversed ? 0 : 1 }}
                    viewport={{ once: false, amount: 0.5 }}

                    // --- UNIQUE transition for each path ---
                    transition={{
                        duration: path.duration || 0.8, // Use specific duration or a default
                        delay: path.delay || 0.3,       // Use specific delay or a default
                        ease: "easeInOut",
                    }}
                />
            ))}
        </svg>
    );
};

export default AnimatedSvgPath;