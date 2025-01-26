import React from "react";
import "./ClientVideos.css"; // Import the custom CSS file

const ClientVideos = () => {
  
  const videos = [
    "../assests/website/WhatsApp Video 2025-01-26 at 22.32.29_2b288722",
  ];

  return (
    <div className="video-container">
      <h2 className="title">Client Videos</h2>
      <div className="video-scroll">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <video
              src={video}
              controls
              className="video-player"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientVideos;
