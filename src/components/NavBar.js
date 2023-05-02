import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { RiRadioButtonLine } from "react-icons/ri";
import Logout from '../components/Logout';


const NavBar = () => {
    const auth = useAuth();
    console.log(auth.user);
    return (
        <nav className="navbar navbar-expand-lg bg-primary text-reset p-4 ">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <img src='../img/inprojuylogo.png' width='370px' className='animate__animated animate__pulse drop img-fluid rounded' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse h4" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto pe-5 mb-2 mb-lg-0 h2">
                        <li className="nav-item">
                            <Link className="nav-link text-white luzhover px-3" to={'/'}>Inicio</Link>
                        </li>
                        <li className="nav-item dropdown px-3">
                            <a className="nav-link dropdown-toggle text-white luzhover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Juego
                            </a>
                            <ul className="dropdown-menu fondotransparente2 p-2">
                            <li><Link className="dropdown-item h5" to='/reglamentos'>Reglamentos y Leyes</Link></li>
                                <li><Link className="dropdown-item h5" to='/enconstruccion'>Juego Ilegal</Link></li>
                                <li><Link className="dropdown-item h5" to='/enconstruccion'>Bingos y otros juegos</Link></li>
                                <li><Link className="dropdown-item h5" to='/enconstruccion'>Juego online</Link></li>
                                <li><Link className="dropdown-item h5" to='/enconstruccion'>Sala de juegos</Link></li>
                                <li><Link className="dropdown-item h5" to='/agencias'>Agencias</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white luzhover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Juego Responsable
                            </a>
                            <ul className="dropdown-menu fondotransparente2 p-2">
                            <li><Link className="dropdown-item h5" to='/juegoResponsable'>¿Que significa?</Link></li>
                                <li><Link className="dropdown-item h5" to='/enconstruccion'>Juego seguro y legal</Link></li>
                                <li><Link className="dropdown-item h5" to='/enconstruccion'>Uso de tecnologias</Link></li>
                                <li><Link className="dropdown-item h5" to='/enconstruccion'>Tu espacio</Link></li>
                                <li><Link className="dropdown-item h5" to='/enconstruccion'>Novedades</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white luzhover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Institucional
                            </a>
                            <ul className="dropdown-menu fondotransparente2 p-2">
                                <li><Link className="dropdown-item h5" to='/mision'>Mision, Vision, Objetivos</Link></li>
                                <li><Link className="dropdown-item h5" to='/autoridades'>Autoridades y Organigrama</Link></li>
                                <li><Link className="dropdown-item h5" to='/delegaciones'>Delegaciones del interior</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white luzhover " to={'/noticias'}>Noticias</Link>
                        </li>
                  
{/*                             {auth.user === "" ? (
                                <>
                                    <li className="nav-item">
                                        <Link className='nav-link text-white luzhover px-3' to="/register">Registrarse</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link  className='nav-link text-white luzhover px-3' to="/login">Ingresar</Link>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link text-dark luzhover px-3">
                                        {auth.userName} <RiRadioButtonLine className="" />
                                       
                                    </Link>
                        </li>
                            )} */}
                      
                     
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar