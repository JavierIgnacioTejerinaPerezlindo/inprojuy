import React from 'react'
import { Link } from 'react-router-dom'


export default function Card({ titulo, imagen, texto, linkN }) {
    return (

        <div className='col contcard overflow-auto p-3' >
            <div className="card bg-dark text-white">
                <img src={imagen} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title position-absolute bottom-0"> <Link to={linkN}>{titulo}</Link></h5>
                </div>
            </div>
        </div>
    )
}
