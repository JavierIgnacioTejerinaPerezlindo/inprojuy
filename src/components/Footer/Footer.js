import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className='Text-center text-white p-0 m-0' style={{backgroundColor: "#575756"}}>
               
                    <nav className="row m-0 p-0">
                   
                        <ul className="col-12 col-md-4 px-4 list-unstyled">
                            <li className="Text-center text-light  p-3  " >   Avda Italia 39 SS de Jujuy </li>
                            <li className="Text-center text-light  p-3" >   www.inprojuy.gob.ar </li>
                            <li className="Text-center text-light  p-3" >   Tel: 388 456 3888 </li>
                        </ul>
                        <Link to='/' className="col-12 col-md-4 d-flex align-items-center justify-content-end">
                            <img src="../img/logogob.png" className="p-2" width="150"></img>

                        </Link>
                       
                        <ul className="col-12 col-md-4  list-unstyled bg-white d-flex justify-content-end h-100 m-0 p-0">
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