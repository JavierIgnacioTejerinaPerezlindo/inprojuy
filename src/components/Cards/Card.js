import React from 'react'
import { Link } from 'react-router-dom'


export default function Card({ titulo, imagen, texto, linkN }) {
    return (

        <>
            {/*             <div classNameName="card noticard bg-ligth text-white">
                <img src={imagen} classNameName="card-img imgnoti" alt="..." />
                <div classNameName="card-img-overlay">
                    <h5 classNameName="card-title position-absolute h3 bottom-0"> <Link to={linkN}>{titulo}</Link></h5>
                </div>
            </div> */}

            <Link to={linkN}><div className="card bg-dark text-white">
                <img src={imagen} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="h4">{titulo}</h5>
                </div>
            </div></Link>
        </>
    )
}
