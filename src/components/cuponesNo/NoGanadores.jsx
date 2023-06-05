import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NoGanadores = () => {
  const auth = useAuth();
  const [maquina, setMaquina] = useState('');
  const [numero, setNumero] = useState('');
  const [cupon, setCupon] = useState('');
  const usuario = auth.id;

  const handleSubmit = async (event) => {

    event.preventDefault();
    try {  
      console.log(maquina,numero,cupon);  
      const response = await axios.get(`https://us-central1-inprojuy-f1173.cloudfunctions.net/app/cupones/${maquina}/${numero}/${cupon}/${usuario}`)
      console.log(response.data);

      if (response.data.numParticip === undefined) {
        alert(response.data.message);
      } else {
        alert(`${response.data.message}, El número de participación se dará antes del Sorteo`);
      }
    
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="container fondotransparente form text-center">
      <h2 className="h1 p-4">Ingrese los datos del cupón</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col">
           
          </div>
          <div className="col-12">
          <label className="p-2 h5">CUP:</label>
            <input
              className="border px-3 py-2 rounded col-3"
              type="text"
              value={maquina}
              onChange={(event) => setMaquina(event.target.value)}
            />-
               <input
              className="border px-3 py-2 rounded col-1"
              type="text"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
            />-
              <input
              className="border px-3 py-2 rounded col-3"
              type="text"
              value={cupon}
              onChange={(event) => setCupon(event.target.value)}
            />
            
          </div>
          <div className="col">
         
          </div>
          <div className="col">
          
          </div>
        </div>
  
        <button className="btn btn-primary text-white m-4" type="submit">Enviar</button>
      </form>
      <Link to='/comocargarcupon'>¿Cómo cargar el cupón?</Link>
    </div>
  )
  
  
}

export default NoGanadores