import React, {useState} from 'react';
import Carrousel from '../components/Carrousel';
import Cards from '../components/Cards/Cards';
import '../components/Cards/Cards.css'
import VideoCarrusel from '../components/VideoCarrusel/VideoCarrusel';
import Modal from '../components/Modal/Modal';
import styled from "styled-components";



const Inicio = () => {
  const [estadoModal,cambiarEstadoModal] = useState(true);
  return (
    <div className='Cards' >
      <Carrousel/>
     
        <Cards />
        <VideoCarrusel  />
        <Modal
          estado={estadoModal}
          cambiarEstado={cambiarEstadoModal}
          >
          <img src='./img/horarios.jpg'></img>
        </Modal>

     
    </div>

  )
}

export default Inicio