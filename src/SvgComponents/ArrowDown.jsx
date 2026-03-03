import React from 'react'
import AnimatedSvgPath from './AnimatedSvgPath'

export default function ArrowDown({ className }) {
    return (
        <AnimatedSvgPath
            className={className}
            width={"100%"}
            paths={[
                {
                    d: "M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.437 125.078L99.6875 107.891"
                }, {
                    d: "M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.438 125.078L137.969 110.234"
                }
            ]}
            viewBox={"0 0 140 127"}
        />
    )
}
