import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { RiRadioButtonLine } from "react-icons/ri";
import Logout from '../components/Logout';


const NavBar = () => {
    const auth = useAuth();
    console.log(auth.user);
    return (
        <nav className="navbar navbar-expand-xl bg-primary text-reset ">
            <div className="container-fluid">
                <Link className="navbar-brand bg-white p-1 " to={'/'}>
                    <img src='../img/logonav.jpg' min-width='400px' className='animate__animated animate__pulse img-fluid' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse h4 " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 h3 align-middle">
                        <li className="nav-item dropdown underline">
                            <a className="nav-link text-white luzhover " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Institucional
                            </a>
                            <ul className="dropdown-menu fondotransparente2 p-3">
                                <li><Link className="dropdown-item h5" to='/mision'>Mision, Vision, Objetivos</Link></li>
                                <li><Link className="dropdown-item h5" to='/autoridades'>Autoridades y Organigrama</Link></li>
                                <li><Link className="dropdown-item h5" to='/delegaciones'>Delegaciones del interior</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white luzhover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Juego
                            </a>
                            <ul className="dropdown-menu fondotransparente2 p-3">
                                <li><Link className="dropdown-item h5" to='/reglamentos'>Reglamentos y Leyes</Link></li>
                                {/* <li><Link className="dropdown-item h5" to='/enconstruccion'>Juego Ilegal</Link></li>
                                <li><Link className="dropdown-item h5" to='/enconstruccion'>Bingos y otros juegos</Link></li>
                                <li><Link className="dropdown-item h5" to='/enconstruccion'>Juego online</Link></li>
                                <li><Link className="dropdown-item h5" to='/enconstruccion'>Sala de juegos</Link></li> */}
                                <li><Link className="dropdown-item h5" to='/sitiosautorizados'>Sitios Autorizados</Link></li>
                                <li><Link className="dropdown-item h5" to='/agencias'>Agencias</Link></li>
                                <li><Link className="dropdown-item h5" to='/dondejuego'>¿Donde Juego?</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
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
                                Juego legal
                            </a>
                            <ul className="dropdown-menu fondotransparente2 p-3">
                                <li><Link className="dropdown-item h5" to='/'>¿Que es el juego legal?</Link></li>
                                <li><Link className="dropdown-item h5" to='/'>Prevencion del lavado de activos</Link></li>
                                <li><Link className="dropdown-item h5" to='/'>Denuncias</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white luzhover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Otra vuelta
                            </a>
                            <ul className="dropdown-menu fondotransparente2 p-3">
                                <li><Link className="dropdown-item h5" to='/'>¿quienes pueden participar?</Link></li>
                                <li><Link className="dropdown-item h5" to='/'>¿Como cargar el cupon?</Link></li>
                                <li><Link className="dropdown-item h5" to='/'>¿Cuando sortea?</Link></li>
                                <li><Link className="dropdown-item h5" to='/'>Premios</Link></li>
                                <li><Link className="dropdown-item h5" to='/'>Ganadores</Link></li>
                                <li><Link className="dropdown-item h5" to='/'>Galeria de fotos</Link></li>
                            </ul>
                        </li>                 
{/*                         <li className="nav-item">
                            <Link className="nav-link text-white luzhover " to={'/noticias'}>Noticias</Link>
                        </li> */}
                        {auth.user === "" ? (
                            <>
                                <li className="nav-item">
                                    <Link className='nav-link text-white luzhover' to="/login">Ingresar</Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link to="/login" className="nav-link luzhover letrachica">
                                    {auth.userName} <RiRadioButtonLine className="online" />

                                </Link>
                            </li>
                        )}


                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar