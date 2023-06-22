import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

function Informe() {
  const [cuponesPorDia, setCuponesPorDia] = useState({});

  useEffect(() => {
    const getCuponesPorDia = async () => {
      try {
        const response = await fetch(
          "https://us-central1-inprojuy-f1173.cloudfunctions.net/app/cupones-por-dia-ultimo-sorteo"
        );
        const data = await response.json();
        setCuponesPorDia(data.cuponesPorDia);
      } catch (error) {
        console.log("Error fetching cupones por día:", error);
      }
    };

    getCuponesPorDia();
  }, []);

  const labels = Object.keys(cuponesPorDia);
  const values = Object.values(cuponesPorDia);

  const chartData = {
    labels: labels.map((fecha) => fecha.slice(0, 5)),
    datasets: [
      {
        label: "Carga de cupones",
        data: values,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    tension: 0.5,
    fill: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Fecha (dd/mm)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Cantidad de Cupones",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Carga de cupones",
        font: { size: 20 },
      },
      legend: {
        display: false,
      },
    },
  };

  const totalCuponesCargados = values.reduce((total, cantidad) => total + cantidad, 0);

  return (
    <div>
      <h1>INFORME DE CARGA DE CUPONES</h1>
      <Line data={chartData} options={options} />
      <p>Total de cupones cargados: {totalCuponesCargados}</p>
    </div>
  );
}

export default Informe;
