import React from 'react';
import Carrousel from '../components/Carrousel';
import Cards from '../components/Cards/Cards';
import '../components/Cards/Cards.css'
import VideoCarrusel from '../components/VideoCarrusel/VideoCarrusel';


const Inicio = () => {
  return (
    <div className='Cards' >
      <Carrousel/>
     
        <Cards />
        <VideoCarrusel  />
     
    </div>

  )
}

export default Inicio