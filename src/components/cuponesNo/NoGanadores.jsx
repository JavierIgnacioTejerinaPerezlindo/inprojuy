import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NoGanadores = () =>{
  const auth = useAuth();  
  const [maquina, setMaquina] = useState('');
  const [numero, setNumero] = useState('');
  const [cupon, setCupon] = useState('');
  const usuario= auth.id;

  const handleSubmit = async (event) => {
  
    event.preventDefault();
    try {
      console.log(maquina,numero,cupon);  
      const response = await axios.get(`https://us-central1-inprojuy-f1173.cloudfunctions.net/app/cupones/${maquina}/${numero}/${cupon}/${usuario}`)
      console.log(response.data);
    
    } catch (error) {
      console.error(error);
    }
  };



    return (
        <div>
        <form onSubmit={handleSubmit}>

      <label>
        Número de máquina:
        <input
          type="text"
          value={maquina}
          onChange={(event) => setMaquina(event.target.value)}
        />
      </label>
      <label>
        Número:
        <input
          type="text"
          value={numero}
          onChange={(event) => setNumero(event.target.value)}
        />
      </label>
      <label>
        Número de cupón:
        <input
          type="text"
          value={cupon}
          onChange={(event) => setCupon(event.target.value)}
        />
      </label>
 {/*      <label>
        ID de usuario:
        <input
          type="text"
          value={usuario}
       
        />
      </label> */}
      <button type="submit">Enviar</button>
    </form>
    </div>
    )
}

export default NoGanadores