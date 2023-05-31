import React from "react";

const VideoComponent = ({ title, videoSrc }) => {
  return (
    <center><div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>
        <div>
      <h2>{title}</h2>
      <video width="100%" controls>
        <source src={videoSrc} type="video/mp4" />
      </video>
      </div>
    </div>
    </center>
  );
};

export default VideoComponent;
