import React from 'react'

const Carrousel = () => {
  const telekino = "./img/telekino.jpg";
  const uniqueParam = Date.now(); // Genera un timestamp único

  return (
    <div className="pt-5 pb-5 drop" >
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner rounded">
                         
          <div className="carousel-item active">
            <a href="https://juj.lotemovil.com.ar" target="_blank">
              <img src="./img/resultados.jpg" className="d-block w-100" alt="..." />
            </a>
          </div>
          <div className="carousel-item">
            <img src="./img/loteria.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img/slider_5.jpeg" className="d-block w-100" alt="..." />
          </div>
                <div className="carousel-item">
            <img src={`${telekino}?${uniqueParam}`} className="d-block w-100" alt="Telekino" />
          </div>
          <div className="carousel-item">
            <img src="./img/quini.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img/brinco.jpg" className="d-block w-100" alt="..." />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carrousel