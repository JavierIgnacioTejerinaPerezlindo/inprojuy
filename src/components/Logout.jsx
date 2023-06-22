import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { Link } from "react-router-dom";
import Cupones from "./cuponesNo/Cupones";
import Informe from "./cuponesNo/Informe";

function Logout() {
  const auth = useAuth();
  const username = auth.userName;
  const id = auth.id;
  
  const ids = ["ErpHKkxgkHdodt33QeatdntKNhC3", "CGiTlQPRYSS0M2jPAAV6si7YrU73","WeNrAUGyhbX6dezY86XMRJjKR1A3"];

  const logoutButton = () => {
    try {
      auth.logout();
    } catch (error) {
      console.log();
    }
  };

  return (
    <div className="">
      <center>
        <h1 className="botonbordeazul text-white px-5 mx-5 py-3 h1">
          Perfil de Usuario
        </h1>
      </center>

      <div className="animate-pulse">
        <h2 className="my-3">E-mail: {auth.user}</h2>
        <h2 className="my-4">
          Usuario : {auth.userName}
        </h2>
      </div>
      <br />

      <div>
        <Link to="/profile">
          <button className="btn btn-primary">
            <h3 className="text-white">Datos del usuario</h3>
          </button>
        </Link>
      </div>
      <div className="my-3">
        <Link to="/noganadores">
          <button className="btn btn-primary">
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
      <Cupones id={auth.id} />

      {ids.includes(id) && <Informe />}
    </div>
  );
}

export default Logout;
