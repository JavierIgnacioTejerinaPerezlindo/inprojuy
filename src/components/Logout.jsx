import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { Link } from "react-router-dom";
import Cupones from "./cuponesNo/Cupones";
function Logout() {
    const auth = useAuth();
    const username = localStorage.getItem("username");
    const logoutButton = () => {
        try {
            auth.logout();
        } catch (error) {
            console.log();
        }
    };
    return (
<div className="">
                <h1 className="">Perfil de Usuario</h1>
               
            <div className="animate-pulse">
                <h2 className="my-3">E-mail: {auth.user}</h2>
                <h2 className="my-4">
                    Usuario : {auth.userName ? auth.userName : username}
                </h2>
                {/* <h2 className="font-thin text-sm">id : {auth.id} </h2> */}
            </div>
            <br/>

            <div>
            <Link to="/profile">
     
            <button  className="btn btn-primary ">
            <h3 className="text-white">Datos del usuario</h3>
            </button>
            </Link>
            </div>
            <div className="my-3">
            <Link to="/noganadores">
     
            <button  className="btn btn-primary ">
            <h3 className="text-white">Ingresar Cupon No Ganador</h3>
            </button>
            </Link>
            </div>
            <button
                className="btn btn-danger my-3"
                onClick={() => {
                    logoutButton();
                }}
            >
                <h3 className="text-white">Salir</h3>
               
            </button>
            <Cupones id= {auth.id} />
        </div>
    );
}

export default Logout;