import React, { useState, useEffect } from "react";


function Cupones(props) {
  const [cupones, setCupones] = useState([]);

  useEffect(() => {
    async function getCupones() {
      const response = await fetch(
        `https://us-central1-inprojuy-f1173.cloudfunctions.net/app/cupones/${props.id}`
      );
      const data = await response.json();
      setCupones(data);
    }
    getCupones();
  }, [props.id]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Cupón</th>
            <th>Fecha de carga</th>
            <th>Número de Participación</th>
            <th>Mes de sorteo</th>
          </tr>
        </thead>
        <tbody>
          {cupones.map((cupon, index) => (
            <tr key={index}>
              <td>{cupon.cupon}</td>
              <td>{cupon.fechaCarga}</td>
              <td>{cupon.numParticip}</td>
              <td>{cupon.mesDeSorteo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cupones;
