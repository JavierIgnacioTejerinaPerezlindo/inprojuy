import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary text-reset ">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <img src='../img/inprojuylogo.png' width='250px' className='animate__animated animate__pulse drop' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse h4" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto pe-5 mb-2 mb-lg-0 h2">
                        <li className="nav-item">
                            <Link className="nav-link text-white luzhover" to={'/'}>Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white luzhover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Juego
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/juegoilegal'>Juego Ilegal</Link></li>
                                <li><Link className="dropdown-item" to='/juegoResponsable'>Juego Responsable</Link></li>
                                <li><Link className="dropdown-item" to='/'>Bingos y otros juegos</Link></li>
                                <li><Link className="dropdown-item" to='/'>Juego online</Link></li>
                                <li><Link className="dropdown-item" to='/'>Sala de juegos</Link></li>
                                <li><Link className="dropdown-item" to='/agencias'>Agencias</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white luzhover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Institucional
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/mision'>Mision, Vision, Objetivos</Link></li>
                                <li><Link className="dropdown-item" to='/autoridades'>Autoridades y Organigrama</Link></li>
                                <li><Link className="dropdown-item" to='/delegaciones'>Delegaciones del interior</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white luzhover" to={'/noticias'}>Noticias</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar