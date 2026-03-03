import React from 'react'
import AnimatedSvgPath from './AnimatedSvgPath'

export default function RoundedArrow({ className, color, width }) {
    return (
        <AnimatedSvgPath color={color} width={width} className={className} paths={[
            {
                d: "M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L356.5 105.5",
                delay: 0.3,
                duration: 0.7
            }, {
                d: "M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L384 97",
                delay: 0.3,
                duration: 0.9
            }
        ]} viewBox="0 0 386 127" />
    )
}
