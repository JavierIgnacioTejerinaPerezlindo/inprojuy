import React from 'react';
import { Link } from 'react-router-dom';
import { StyleHTMLAttributes } from '../styles/styles.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <img src='./inprojuylogo.png'/>
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/pagina1'}>pagina1</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={'/Pagina2'}>Pagina2</Link></li>
                                <li><Link className="dropdown-item" to={'/Pagina3'}>Pagina3</Link></li>
                                <li><Link className="dropdown-item" href="#">Something elshere</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};
export default NavBar