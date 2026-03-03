import React from 'react';

const FadingImage = ({ images, currentIndex, alt }) => {
    return (
        <div className="relative w-full h-full">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={alt}
                    className={`absolute rounded-xl inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}
        </div>
    );
};

export default FadingImage;