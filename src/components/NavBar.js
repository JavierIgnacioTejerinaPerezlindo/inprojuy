import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary text-reset" data-bs-theme="light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <img src='../img/inprojuylogo.png' width= '200px' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse h4" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/juegos'}>Juegos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/juegoresponsable'}>Juego responsable</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/juegoilegal'}>Juego ilegal</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/noticias'}>Noticias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/institucional'}>Institucional</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar