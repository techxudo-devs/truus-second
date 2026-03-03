import React from 'react';

const WavyFooterShape = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 1440 150" // Assuming a standard 1440px width
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0,80 C150,150 300,10 450,80 C600,150 750,10 900,80 C1050,150 1200,10 1350,80 L1440,60 L1440,150 L0,150 Z"
            fill="#F3EEE7" // Use the same color as your beige background
        />
    </svg>
);

export default WavyFooterShape;