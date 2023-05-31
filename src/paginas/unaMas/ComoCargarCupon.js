import React from 'react'
import VideoComponent from '../../components/VideoComponent'

const ComoCargarCupon = () => {
  return (
    <div className='container-fluid fondotransparente4'> 
    <div className='contcaja'>
        <div className='cajaroja'>
            <h2 className='titulocaja'>¿Como Cargar el Cupon?</h2>
        </div>
        <div className='cuerpo'>
            <p>Para registrarse, los participantes deberán ingresar al Sitio Web <a href='https://inprojuy.gob.ar'>(InProJuy)</a>, y cargar sus Datos Personales, para generar su Perfil.</p>
            
        </div>
    </div>
    <VideoComponent
        title="Una mas!"
        videoSrc="./download/unamas.mp4"
      />
    </div>
  )
}

export default ComoCargarCupon