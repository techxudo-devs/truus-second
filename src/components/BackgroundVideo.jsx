import React from 'react';

const BackgroundVideo = () => {
    const vimeoUrl = "https://player.vimeo.com/video/1100291628?background=1&autoplay=1&loop=1&muted=1&quality=1080p";

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <iframe
                src={vimeoUrl}
                allow="autoplay; encrypted-media"
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            ></iframe>
        </div>
    );
};

export default BackgroundVideo;