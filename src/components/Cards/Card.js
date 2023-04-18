import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'


export default function Card({titulo,imagen,texto,linkN}) {
    return (
        <div className='cardt text-center bg-dark animate__animated animate__fadeInUp mt-2'>
            <div className='overflow'>
            <img src={imagen} className='card-img-top'/>
            </div>
            <div className='card-body text-light'>
                <h4 className='card-title'>{titulo}</h4>
                <p className='card-text text-secondary'>{texto.substring(0,100)}</p>
                <Link className='btn btn-light rounded-0 bg-light' to={linkN}>Ver más...</Link>
            </div>
        </div>
    )
}
