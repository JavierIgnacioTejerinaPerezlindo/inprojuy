import React from "react";
import VideoComponent from "../components/VideoComponent";

const Videounamas = () => {
  return (
    <div>
        <p></p>
      <center ><h1 className='p-3 botonbordeazul text-white px-5 mx-3 py-2'>Una más</h1></center>
      <VideoComponent
        title="¿Cómo cargar tu cupón?"
        videoSrc="./download/unamas.mp4"
      />
    </div>
  );
};

export default Videounamas;