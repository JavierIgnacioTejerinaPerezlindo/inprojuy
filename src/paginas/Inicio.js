import React, { useState } from 'react';
import styled from "styled-components";
import Carrousel from '../components/Carrousel';
import Cards from '../components/Cards/Cards';
import '../components/Cards/Cards.css'
import VideoCarrusel from '../components/VideoCarrusel/VideoCarrusel';
import Modal from '../components/Modal/Modal';




const Inicio = () => {
  const [estadoModal, cambiarEstadoModal] = useState(true);
  return (
    <div className='Cards' >
      <Carrousel />

      <Cards />
      <VideoCarrusel />
      <Modal
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
      >
        <Contenido>
          <img src='./img/horarios.jpg'></img>
        </Contenido>
      </Modal>


    </div>

  )
}

export default Inicio

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;