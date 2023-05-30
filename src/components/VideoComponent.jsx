import React from "react";

const VideoComponent = ({ title, videoSrc }) => {
  return (
    <center><div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div>
      <h2>{title}</h2>
      <video width="640" height="360" controls>
        <source src={videoSrc} type="video/mp4" />
      </video>
      </div>
    </div>
    </center>
  );
};

export default VideoComponent;
