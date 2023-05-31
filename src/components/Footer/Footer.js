import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <div>
            <footer className='Text-center text-white p-0 m-0 ' style={{ backgroundColor: "#575756" }}>

                <nav className="row m-0 p-0">

                    <ul className="col-12 col-md-4 px-4 list-unstyled">
                        <ul className="navbar-nav mb-2 mb-lg-0 align-middle d-flex flex-row letra_menu">
                            <li className="nav-item dropdown p-2">
                                <a className="nav-link text-white luzhover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Institucional
                                </a>
                                <ul className="dropdown-menu fondotransparente2 p-3">
                                    <li><Link className="dropdown-item h5" to='/mision'>Mision, Vision, Objetivos</Link></li>
                                    <li><Link className="dropdown-item h5" to='/autoridades'>Autoridades y Organigrama</Link></li>
                                    <li><Link className="dropdown-item h5" to='/delegaciones'>Delegaciones del interior</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown  p-2">
                                <a className="nav-link text-white luzhover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Juego
                                </a>
                                <ul className="dropdown-menu fondotransparente2 p-3">
                                    <li><Link className="dropdown-item h5" to='/reglamentos'>Reglamentos y Leyes</Link></li>
                                    <li><Link className="dropdown-item h5" to='/sitiosautorizados'>Sitios Autorizados</Link></li>
                                    <li><Link className="dropdown-item h5" to='/agencias'>Agencias</Link></li>
                                    <li><Link className="dropdown-item h5" to='/dondejuego'>¿Donde Juego?</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown  p-2">
                                <a className="nav-link text-white luzhover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Juego Responsable
                                </a>
                                <ul className="dropdown-menu fondotransparente2 p-3">
                                    <li><Link className="dropdown-item h5" to='/juegoResponsable'>¿Que significa?</Link></li>
                                    <li><Link className="dropdown-item h5" to='/comotrabajamos'>¿Como Trabajamos?</Link></li>
                                    <li><Link className="dropdown-item h5" to='/quetaljuego'>¿Como estoy jugando?</Link></li>
                                    <li><Link className="dropdown-item h5" to='/mitosyverdades'>Mitos y Verdades</Link></li>
                                    <li><Link className="dropdown-item h5" to='/recomendaciones'>Recomendaciones</Link></li>
                                    <li><Link className="dropdown-item h5" to='/lugaresdeayuda'>Lugares de Ayuda</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white luzhover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Juego Ilegal
                                </a>
                                <ul className="dropdown-menu fondotransparente2 p-3">
                                    <li><Link className="dropdown-item h5" to='/'>¿Que es el juego Ilegal?</Link></li>
                                    <li><Link className="dropdown-item h5" to='/'>Prevencion del lavado de activos</Link></li>
                                    <li><Link className="dropdown-item h5" to='/'>Denuncias</Link></li>
                                </ul>
                            </li>


                        </ul>
                        <li className="Text-center text-light  p-3  " ><i className="bi bi-geo-alt-fill mr-2"></i>   Avda Italia 39 S. S. de Jujuy </li>
                        <li className="Text-center text-light  p-3" > <i className="bi bi-globe mr-2"></i> www.inprojuy.gob.ar </li>
                        <li className="Text-center text-light  p-3" >  <i className="bi bi-telephone-fill mr-2"></i> Tel: 388 422 3812 </li>
                    </ul>
                    <Link to='/' className="col-12 col-md-4 d-flex align-items-center justify-content-end">
                        <img src="../img/logogob.png" className="p-2" width="200"></img>

                    </Link>

                   
                    <ul className="col-12 col-md-4 list-unstyled bg-white d-flex  h-100% m-0 p-0 justify-content-end">
                        <Link to='/' className=" ">
                            <img src="../img/logoinprofooter.png" className="d-flex justify-content-end m-0 img-fluid" ></img>

                        </Link>
                    </ul>

                </nav>
                {/* 
                <div className="container">
                            <p className="text-center mb-0 mt-2  text-dark">Copyright © 2023 - Creado por Connect-Way para INPROJUY </p>
                        </div> */}
            </footer>
        </div>
    )
}
export default Footer