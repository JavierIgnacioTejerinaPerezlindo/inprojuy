import React from 'react'
import Salas from '../components/salas/Salas'

const SitiosAutorizados = () => {
    return (
        <div className='container-fluid p-0'>

            <div class="contimg">
                <img src=".\img\juegoilegal.png" className="img-fluid" />
            </div>
            <div class="contimg">
                <img src=".\img\Recurso7.png" className="img-fluid" />
            </div>
            <br />
            <div class="contimg">
                <img src=".\img\Recurso6.png" className="img-fluid" />
            </div>
            <br />
            <Salas />
            <br />
            <div className='fondorojo'>
                <div className='btn-titulo'>
                    <h4 className='p-5 botonbordeazul text-white px-5 mx-5 py-3'><strong>¿Por qué es importante jugar en sitios autorizados?</strong></h4>

                </div>
                <br />
                <ul>

                    <li>Apostar sólo resulta seguro y legal cuando se realiza en aquellos sitios autorizados ya que proporcionan las siguientes&nbsp;<strong>ventajas a los jugadores</strong>:</li>
                    <li>Reglas de juego claras y transparentes.</li>
                    <li>Protección de datos personales.</li>
                    <li>Garantía de juego honesto, sin trampas ni estafas.</li>
                    <li>Seguridad en los pagos, cobros de premios y depósitos.</li>
                    <li>Identificación del usurario (comprobación de identidad y edad para impedir el acceso a menores).</li>
                    <li>Protección de los derechos de los apostadores.</li>
                    <li>Herramientas de Juego Responsable. Las páginas contienen medidas de juego responsable con el objetivo de prevenir el desarrollo de conductas problemáticas.</li>
                    <li>Aporte a la Sociedad,&nbsp;<strong>“lo que jugás vuelve”</strong>.</li>
                    <li>Los sitios autorizados se destacan por encontrarse enmarcados en las siguientes&nbsp;<strong>condiciones</strong>:</li>
                    <li><strong>Regulación</strong>&nbsp;</li>
                    <li><strong>Control&nbsp;</strong></li>
                    <li><strong>Certificación&nbsp;</strong></li>
                    <li><strong>Seguridad</strong>&nbsp;</li>
                    <li><strong>Transparencia</strong>&nbsp;</li>
                    <li><strong>Protección de grupos vulnerables y menores</strong>&nbsp;</li>
                    <li><strong>Juego Responsable&nbsp;</strong></li>
                    <li><strong>Lo que jugás vuelve&nbsp;</strong></li>
                </ul>
            </div>
        </div>
    )
}

export default SitiosAutorizados