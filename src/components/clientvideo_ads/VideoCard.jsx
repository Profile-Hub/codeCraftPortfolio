import React, { useState } from 'react';
import './VideoCard.css';

const VideoCard = ({ thumbnail, videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-card-outer-box">
          <div className='video-card-box'>
        <div className='video-card'>
          <div className="video-card-thumbnail">
            {!isPlaying ? (
              <>
                <img
                  src={thumbnail}
                  alt="Thumbnail"
                  onClick={handleClick}
                  style={{ cursor: 'pointer' }} 
                />
                <div className="play-icon" onClick={handleClick}>
                  <i className="fas fa-play"></i>
                </div>
              </>
            ) : (
              <div className="video-card-video">
                <video controls autoPlay>
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
