import React from 'react'

const InstitucionalAutoridades = () => {
    return (
        <div>


            <div className='container-fluid fondotransparente3 '>



                <div className='margenazul'>
                    <div className='botonbordeazul mx-auto my-3'>
                    <h2 className='text-white px-4 py-3 h1 container-fluid'>Autoridades</h2>
                    </div>
                    <div className="card ms-auto container-fluid cardaut">
                        <div className='p-4'>
                            <img src=".\img\aut-marales.jpeg" className="card-img" alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">LIC. WALTER MORALES</h3>
                            <h5 className="card-title">Presidente InProJuy</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>

                <div className='margenazul'>
                    <div className="card mx-auto cardaut">
                        <div className='p-4'>
                            <img src=".\img\aut-naser.jpeg" className="card-img" alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">ING. JOSE GARCIA NASER</h3>
                            <h5 className="card-title">Vicepresidente InProJuy</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>

                <div className='margenrojo'>
                    <div className="card mx-auto cardaut">
                        <div className='p-4'>
                            <img src=".\img\aut-lamas.jpeg" className="card-img" alt="..." />
                        </div>
                        <div className="card-body">
                        <h3 className="card-title">CPN GABRIELA LAMAS</h3>
                        <h5 className="card-title">Gerente General de InProJuy</h5>
                        </div>
                    </div>
                </div>




            </div>

            <div className='container-fluid text-center py-5' ><img className='img-fluid' src='.\img\aut-organigrama.jpg' /></div>
        </div>


    )
}

export default InstitucionalAutoridades