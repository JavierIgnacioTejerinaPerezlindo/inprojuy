import React from 'react'

const InstitucionalAutoridades = () => {
    return (
        <div className='container fondotransparente '>
             <center>
            <h1 className='p-5'>Autoridades</h1>
            </center>
            <div className='container d-flex justify-content-around row p-5  '>
                <div className="col-md-4 card  " style={{ width: '23rem' }}>
                    <img src=".\img\aut-marales.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">LIC. WALTER MORALES</h3>
                        <h5 className="card-title">Presidente InProJuy</h5>
                        <p className="card-text"></p>
                    </div>
                </div>
                <div className="card col-md-4" style={{ width: '23rem' }}>
                    <img src=".\img\aut-naser.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">ING. JOSE GARCIA NASER</h3>
                        <h5 className="card-title">Vicepresidente InProJuy</h5>
                        <p className="card-text">Ing. en Sistemas de Información, Especialista en Gestión Pública y Técnico en Administración y Gestión de Juegos de Azar. Doc. Univ. Facultad de Ciencias Económicas UNJu. Presidente Unión Jujeña de Rugby.</p>
                    </div>
                </div>
                <div className="card col-4" style={{ width: '23rem' }}>
                    <img src=".\img\aut-lamas.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">CPN GABRIELA LAMAS</h3>
                        <h5 className="card-title">Gerente General de InProJuy</h5>
                    </div>
                </div>

                
            </div>
            <div className='container text-center p-5' ><img src='.\img\aut-organigrama.jpg'/></div>
          
        </div>

        
        
    )
}

export default InstitucionalAutoridades