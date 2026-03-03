import React from 'react'
import AnimatedSvgPath from './AnimatedSvgPath'

export default function Twolines({ className, color }) {
    return (
        <AnimatedSvgPath
            color={color}
            paths={[
                { d: "M1 6.5661C56.3941 3.06082 112.187 1.20095 168 0.999878", delay: 0.2, duration: 0.3, },
                { d: "M32.1313 8.63371C68.2147 6.92799 104.462 6.13378 140.695 6.25107", delay: 0.5, duration: 0.3 }]}
            viewBox="0 0 169 10"
            className={className}
        />
    )
}
