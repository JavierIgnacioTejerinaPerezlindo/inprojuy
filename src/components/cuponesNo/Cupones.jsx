import React, { useState, useEffect } from "react";

function Cupones(props) {
  const [cupones, setCupones] = useState([]);

  useEffect(() => {
    const getCupones = async () => {
      try {
        const response = await fetch(
          `https://us-central1-inprojuy-f1173.cloudfunctions.net/app/cupones/${props.id}`
        );
        const data = await response.json();
        setCupones(data);
      } catch (error) {
        console.log("Error fetching cupones:", error);
      }
    };

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
          {Array.isArray(cupones) && cupones.length > 0 ? (
            cupones.map((cupon, index) => (
              <tr key={index}>
                <td>{cupon.cupon}</td>
                <td>{cupon.fechaCarga}</td>
                {/* <td>{cupon.numParticip}</td> */}
                <td>{cupon.mesDeSorteo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Sin cupones cargados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Cupones;
