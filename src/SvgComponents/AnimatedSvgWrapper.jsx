// src/components/AnimatedSvgWrapper.jsx

import React from 'react';
import { motion } from 'framer-motion';

/**
 * A wrapper component that takes a static SVG component as a child,
 * finds all its <path> elements, and makes them animate on scroll.
 * @param {React.ReactElement} children - A single React element, which should be your SVG component.
 * @param {string} width - The width of the SVG container.
 * @param {string} color - The color to apply to the path strokes.
 * @param {number} strokeWidth - The thickness to apply to the path strokes.
 * @param {string} className - Custom classes for positioning and styling.
 */
const AnimatedSvgWrapper = ({
    children,
    width = "100%",
    color = "#000",
    strokeWidth = 2,
    className = ""
}) => {
    // 1. We expect a single SVG element as a child.
    const svgElement = React.Children.only(children);

    // 2. We map over the children of the SVG (the <path>, <g>, etc.)
    const animatedPaths = React.Children.map(svgElement.props.children, (child) => {
        // We only want to animate <path> elements.
        if (child.type === 'path') {
            // 3. We dynamically create a motion.path, preserving the original's props.
            return (
                <motion.path
                    {...child.props} // Keep original props like 'd'
                    stroke={color}   // Override stroke color
                    strokeWidth={strokeWidth} // Override stroke width
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    // --- Add our standard animation ---
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "easeInOut",
                    }}
                />
            );
        }
        // If it's not a path (e.g., a <g> group), we return it as is.
        return child;
    });

    // 4. We clone the original SVG element, but replace its children with our new animated paths.
    return React.cloneElement(
        svgElement,
        {
            width: width,
            className: className,
            fill: "none", // Ensure fill is none for line drawings
        },
        animatedPaths
    );
};

export default AnimatedSvgWrapper;