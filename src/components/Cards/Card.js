import React from 'react'
import './Cards.css'


export default function Card({titulo,imagen,texto}) {
    return (
        <div className='card text-center bg-dark animate__animated animate__fadeInUp mt-2'>
            <div className='overflow'>
            <img src={imagen} className='card-img-top'/>
            </div>
            <div className='card-body text-light'>
                <h4 className='card-title'>{titulo}</h4>
                <p className='card-text text-secondary'>{texto.substring(0,100)}</p>
            </div>
        </div>
    )
}
