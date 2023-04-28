import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { Link } from "react-router-dom";
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
        <div className="p-5">
            <div className="flex items-center">
                <h1 className="text-xl font-semibold text-violet-900">Perfil de Usuario</h1>
               
            </div>
            <div className="animate-pulse">
                <h2 className="font-thin">e-mail : {auth.user}</h2>
                <h2 className="font-thin">
                    Usuario : {auth.userName ? auth.userName : username}
                </h2>
                {/* <h2 className="font-thin text-sm">id : {auth.id} </h2> */}
            </div>
            <div>
            <Link to="/enconstruccion">
     
            <button  className="btn btn-primary ">
            <h3 className="text-white">Ingresar Cupon No Ganador</h3>
            </button>
            </Link>
            </div>
            <button
                className="btn btn-danger "
                onClick={() => {
                    logoutButton();
                }}
            >
                <h3 className="text-white">Salir</h3>
               
            </button>
           
        </div>
    );
}

export default Logout;