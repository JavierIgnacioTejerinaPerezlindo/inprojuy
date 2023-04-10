import React from 'react'

const InstitucionalDelegaciones = () => {
    return (
        <div className='container'>
            <br/>
            <h2>Delegaciones del Interior</h2>
            <br/>
            <div className="card mb-3 mx-auto" style={{maxWidth: "70%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src=".\img\laquiaca.jpeg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Delegacion La Quiaca</h5>
                            <p className="card-text">Dirección: Balcarce 452</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 mx-auto" style={{maxWidth: "70%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src=".\img\libertador.jpeg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Delegacion libertador</h5>
                            <p className="card-text">Dirección: Avenida Libertad 592</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 mx-auto" style={{maxWidth: "70%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src=".\img\sanpedro.jpeg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Delegacion San Pedro</h5>
                            <p className="card-text">Dirección: Sarmiento 80</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default InstitucionalDelegaciones