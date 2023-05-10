import React, { useState } from 'react';
import styled from "styled-components";
import Carrousel from '../components/Carrousel';
import Cards from '../components/Cards/Cards';
import '../components/Cards/Cards.css'
import VideoCarrusel from '../components/VideoCarrusel/VideoCarrusel';
import Modal from '../components/Modal/Modal';
import Links from '../components/Links/Links';
import { Link } from 'react-router-dom';




const Inicio = () => {
	const [estadoModal, cambiarEstadoModal] = useState(true);
	return (
		<div className='' >

			<Modal
				estado={estadoModal}
				cambiarEstado={cambiarEstadoModal}>
				<Contenido>
					<img src='./img/horarios.jpg' useMap='#map' className='rounded'/>
					<map name='map'>
						<Link to={'/dondejuego'}><area shape='rect' coords='555, 340, 724, 371'/></Link>
					</map>
				</Contenido>

			</Modal>
			<Carrousel />

			<Cards />
			<Links />
			<VideoCarrusel />



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