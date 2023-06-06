import React from 'react'

const Formularios = () => {
    return (
        <div className='container fondotransparente p-5 my-5 '>
            <center><h1 className=" p-5 botonbordeazul text-white px-5 mx-5 py-3">Formulario de Autoexclusión</h1></center>
            <br />
            <br />
            <br />
            <p><strong>ACTA DE LEVANTAMIENTO o REVOCACION DE LA AUTOEXCLUSION VOLUNTARIA</strong></p>
            <br />


            <ul>
                <li className='h5 sinvineta'><a href=".\download\FormActaRevocacion.pdf" download >Descargar</a></li>

        
            </ul>

            <br />

            <hr className="wp-block-separator has-css-opacity" />

            <br />

            <p><strong>ACTA DE ACUERDO DE AUTOEXCLUSION</strong></p>

            <br />

            <ul>
                <li className='h5 sinvineta'><a href=".\download\FormAutoexclusion.pdf" download >Descargar</a></li>

              
            </ul>
            <br />
            <p><strong>ACTA DE ACUERDO DE AUTOEXCLUSION POR PARTE DE UN FAMILIAR</strong></p>
            <br />


            <ul>
                <li className='h5 sinvineta'><a href=".\download\FormAutoexFamiliar.pdf" download >Descargar</a></li>

        
            </ul>

            <br />

            <hr className="wp-block-separator has-css-opacity" />

            <br />


        </div>
    )
}

export default Formularios