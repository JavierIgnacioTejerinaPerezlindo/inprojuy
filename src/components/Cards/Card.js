import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'


export default function Card({titulo,imagen,texto,linkN}) {
    return (
        <div className='cardt text-center  animate_animated animate_fadeInUp 
         border-radius-sm'>
            <div className='overflow'>
            <img src={imagen} className='card-img-top cardimagen '/>
            </div>
            <div className='diva'>
                <h4 className='card-title text-dark'><Link className='linkcard ' to={linkN}>{titulo}</Link></h4>
                {/* <p className='card-text text-secondary'>{texto.substring(0,100)}</p> */}
                
            </div>
        </div>
    )
}
