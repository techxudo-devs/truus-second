import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSvgPath from './AnimatedSvgPath';

/**
 * An animated SVG curve that draws itself when it comes into view.
 * @param {string} width 
 * @param {string} color
 * @param {number} strokeWidth 
 * @param {string} className
 */
const CurveLine = ({
    width = "100%",
    color = "#000",
    strokeWidth = 2,
    className = "",
    reversed
}) => {
    return (

        <AnimatedSvgPath reversed={reversed} className={className} width={width} color={color} paths={[{
            d: "M322.902 98.9997C232.515 99.0422 140.637 94.7899 58.0275 80.853C31.532 76.3775 2.92086 69.1167 1.08733 58.1139C-0.222339 50.1514 13.3981 42.965 28.5701 37.4583C61.2714 25.5944 103.362 18.1423 146.239 12.7206C228.606 2.3131 316.878 -1.23755 403.155 2.36627C456.307 4.58809 509.519 9.62707 555.338 20.109C581.41 26.0728 606.777 35.279 606.999 46.8453C607.12 53.7659 597.831 60.3569 584.835 65.1939C571.839 70.0309 555.398 73.3158 538.675 76.0266C463.097 88.252 379.057 89.8891 297.011 91.3668"
        }]} viewBox={"0 0 608 100"} />
    );
};

export default CurveLine;