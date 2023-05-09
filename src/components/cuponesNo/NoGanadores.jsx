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

      if (response.data.numParticip === undefined) {
        alert(response.data.message);
      } else {
        alert(`${response.data.message}, El número de participación es: ${response.data.numParticip}`);
      }
    
    } catch (error) {
      console.error(error);
    }
  };



    return (
        <div>
        <form onSubmit={handleSubmit}>
      
          <label htmlFor="maquina">
            Número de máquina:
            <input
              type="number"
              id="maquina"
              name="maquina"
              value={maquina}
              onChange={(event) => setMaquina(event.target.value)}
              required
            />
          </label>
      
          <label htmlFor="numero">
            Número:
            <input
              type="number"
              id="numero"
              name="numero"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
              required
            />
          </label>
      
          <label htmlFor="cupon">
            Número de cupón:
            <input
              type="text"
              id="cupon"
              name="cupon"
              value={cupon}
              onChange={(event) => setCupon(event.target.value)}
              required
            />
          </label>
      
          {/* 
          <label htmlFor="usuario">
            ID de usuario:
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={usuario}
            />
          </label>
          */}
      
          <button type="submit">Verificar cupón</button>
        </form>
      </div>
      
    )
}

export default NoGanadores