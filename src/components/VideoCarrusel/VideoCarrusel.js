import './VideoCarrusel.css'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import vid1 from "./videos/inprohorarios.mp4"
import vid2 from "./videos/juego-responsable.mp4"
import vid3 from "./videos/Lavadodeactivos.mp4"
import vid4 from "./videos/telekino.mp4"
import vid5 from "./videos/PALPITO.mp4"
import vid6 from "./videos/unamas.mp4"


import "bootstrap/dist/css/bootstrap.min.css"


const VideoCarrusel = () => {

    const videoProperties = [
        {
            id: 1,
            title: "Horarios",
            src: vid1,
            credit: "INPROJUY",
            tiempo: 35000
        },
        {
            id: 2,
            title: "Juego Responsable",
            src: vid2,
            credit: "INPROJUY",
            tiempo: 70000
        },
        {
            id: 3,
            title: "Lavado de Activos",
            src: vid3,
            credit: "INPROJUY",
            tiempo: 60000
        },
        {
            id: 4,
            title: "Telekino",
            src: vid4,
            credit: "INPROJUY",
            tiempo: 16000
        },
        {
            id: 5,
            title: "Palpito",
            src: vid5,
            credit: "INPROJUY",
            tiempo: 38000
        },
        {
            id: 6,
            title: "Una Más",
            src: vid6,
            credit: "INPROJUY",
            tiempo: 49000
        }
    ]

    return <div className='back'  >

        <Carousel className= 'carousel ' >
            {videoProperties.map((videoObj) => {
                return ( 
                  
                    <Carousel.Item interval={videoObj.tiempo} className='player-wrapper carousel' key={videoObj.id}>
                        <ReactPlayer className='react-player '
                            url={videoObj.src}
                            pip={false}
                            controls={true}
                            width='80%'
                            height='89  %'
                        //playing={true}
                        />
                        <Carousel.Caption >
                            {/* <h3>{videoObj.title}</h3> */}
                            {/* <p>{videoObj.credit}</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                
                )
            }
            )}
        </Carousel>
      
    </div>
}
export default VideoCarrusel