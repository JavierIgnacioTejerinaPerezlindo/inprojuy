import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className='text-white py-4' style={{backgroundColor: "#d7412a"}}>
                <div className="container">
                    <nav className="row">
                        <Link to='/' className="col-6 col-md-3 d-flex align-items-center justify-content-left">
                            <img src="../img/logo_inpro_white.png" className="mx2" width="150"></img>

                        </Link>
                        <ul className="col-12 col-md-3  list-unstyled">
                            <Link className="nav-link" to={'/juegoResponsable'}>Juego Responsable</Link>
                            <Link className="nav-link" to={'/noticias'}>Noticias</Link>
                            <Link className="nav-link" to={'/institucionalMision'}>Institucional</Link>
                        </ul>
                        <ul className="col-12 col-md-3  list-unstyled">
                            <li className="Text-center text-light fst-italic " >INPROJUY es el ente regulador de Juegos de Azar de la Provincia de Jujuy, cuyo objetivo es la regulación, autorización, dirección, control, administración, fiscalización y explotación de Juegos de Azar en sus distintas modalidades</li>
                        </ul>
                        <ul className="col-12 col-md-3  list-unstyled">
                            <li className=" fw-bold mb-2">Síguemos</li>
                            <li className=" d-flex justify-content-between">
                                <Link className=" bi bi-facebook text-reset" to="https://facebook.com/inprojuy"  ></Link>
                                <Link className=" bi bi-instagram text-reset" to="https://instagram.com/inprojuy"  ></Link>
                                <Link className=" bi bi-twitter text-reset" to="https://twitter.com/inprojuy"  ></Link>

                            </li>
                        </ul>
                        

                    </nav>
                </div>
                <div className="container">
                            <p className="text-center mb-0 mt-2  text-dark">Copyright © 2023 - Creado por Connect-Way para INPROJUY </p>
                        </div>
            </footer>
        </div>
    )
}
export default Footer