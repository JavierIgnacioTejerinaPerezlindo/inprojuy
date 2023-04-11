import './VideoCarrusel.css'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import vid1 from "./videos/inprohorarios.mp4"
import vid2 from "./videos/juego-responsable.mp4"
import vid3 from "./videos/Lavadodeactivos.mp4"
import vid4 from "./videos/telekino.mp4"
import vid5 from "./videos/PALPITO.mp4"

import "bootstrap/dist/css/bootstrap.min.css"


const VideoCarrusel = () => {

    const videoProperties = [
        {
            id: 1,
            title: "Horarios",
            src: vid1,
            credit: "INPROJUY"
        },
        {
            id: 2,
            title: "Juego Responsable",
            src: vid2,
            credit: "INPROJUY"
        },
        {
            id: 3,
            title: "Lavado de Activos",
            src: vid3,
            credit: "INPROJUY"
        },
        {
            id: 4,
            title: "Telekino",
            src: vid4,
            credit: "INPROJUY"
        },
        {
            id: 5,
            title: "Palpito",
            src: vid5,
            credit: "INPROJUY"
        }
    ]

    return <div  >

        <Carousel   >
            {videoProperties.map((videoObj) => {
                return (
                    <Carousel.Item className='player-wrapper' key={videoObj.id}>
                        <ReactPlayer className='react-player'
                            url={videoObj.src}
                            pip={true}
                            controls={true}
                            width='90%'
                            height='87%'
                        //playing={true}
                        />
                        <Carousel.Caption >
                            <h3>{videoObj.title}</h3>
                            <p>{videoObj.credit}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
            )}
        </Carousel>
        <p></p>
    </div>
}
export default VideoCarrusel