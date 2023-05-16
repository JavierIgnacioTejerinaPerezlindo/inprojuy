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
        alert(`${response.data.message}, El número de participación es: ${response.data.numParticip}`);
      }
    
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="container fondotransparente form text-center">
      <h2 className="h1 p-4">Ingrese los datos del cupón</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row col-6">
          <label className=" p-2 h5">
            Número de máquina:
          </label>
        </div>
        <div className="form-col">
          <input
            className="border px-3 py-2 rounded"
            type="text"
            value={maquina}
            onChange={(event) => setMaquina(event.target.value)} />
        </div>

        <div class="form-row col-6" >
          <label className="p-2 h5">
            Código:
          </label>
        </div>

        <div className="form-col">
          <input
            className="border px-3 py-2 rounded"
            type="text"
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
          />
        </div>
        <div class="form-row col-6" >
          <label className="p-2 h5">
            Número de cupón:
          </label>
        </div>
        <div className="form-col">
          <input
            className="border px-3 py-2 rounded"
            type="text"
            value={cupon}
            onChange={(event) => setCupon(event.target.value)}
          />
        </div>
        {/*      <label>
        ID de usuario:
        <input
          type="text"
          value={usuario}
       
        />
      </label> */}
        <button className="btn btn-primary text-white m-4" type="submit">Enviar</button>
      </form>
      <a href="">¿Donde encuentro estos datos en mi cupon?</a>
    </div>
  )
}

export default NoGanadores