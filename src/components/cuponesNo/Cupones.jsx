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
    <div className="table-responsive">
      <h2 className="h3 mt-4 mb-3">Cupones no Ganadores Cargados para el próximo Sorteo</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Cupón</th>
            <th>Fecha de carga</th>
            <th>Mes de sorteo</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(cupones) && cupones.length > 0 ? (
            cupones.map((cupon, index) => (
              <tr key={index}>
                <td>{cupon.cupon}</td>
                <td>{cupon.fechaCarga}</td>
                <td>{cupon.mesDeSorteo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Sin cupones cargados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Cupones;
