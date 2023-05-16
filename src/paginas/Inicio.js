import React, { useState } from 'react';
import styled from "styled-components";
import Carrousel from '../components/Carrousel';
import Cards from '../components/Cards/Cards';
import '../components/Cards/Cards.css'
import VideoCarrusel from '../components/VideoCarrusel/VideoCarrusel';
import Modal from '../components/Modal/Modal';
import { Link } from 'react-router-dom';
import Ganadores from '../components/Ganadores/Ganadores';
import Salas from '../components/salas/Salas';
import TiraResp from '../components/TiraResp/TiraResp';
import JuegoOnline from '../components/juegoonline/JuegoOnline';




const Inicio = () => {
	const [estadoModal, cambiarEstadoModal] = useState(true);
	return (
		<container className='' >

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
			<Ganadores/>
			<Carrousel />
			<TiraResp/>
			<Salas/>

			<JuegoOnline/>
			<VideoCarrusel />
			<div className='p-5'>

			<Cards />
			<Link className='btn-titulo' to={'/noticias'}><div className='botonbordeazul'><h2 className='text-white px-5 mx-5 py-3 h1'>MAS NOTICIAS</h2></div></Link>
			</div>



		</container>

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