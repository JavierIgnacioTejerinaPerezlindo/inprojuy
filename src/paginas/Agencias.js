import React from 'react'

const Agencias = () => {
    return (
        <div className='container-fluid fondotransparente4 '>
            <br />
            <div className='btn-titulo'>
                <div className='botonbordeazul'>
                    <h3 className='text-white px-5 mx-5 py-3 h1'>Apertura de Agencias</h3>
                </div>
            </div>
            <br />
            <div className='contcaja'>
                <div className='cajaroja'>
                    <h2 className='titulocaja'>Personas Físicas</h2>
                </div>

                <div className='cuerpo'>
                    <ul>
                        <li>Nota de pedido del interesado/da.</li>
                        <li>Fotocopia del D.N.I. ambos lados.</li>
                        <li>Constancia de CUIL.</li>
                        <li>Planilla Prontuarial (original).</li>
                        <li>Habilitación Comercial</li>
                        <li>Informe antecedente comerciales, Veraz (original), Nosis o BCRA.</li>
                        <li>Local con acceso directo al público e instalaciones adecuadas, según los requisitos establecidos por el InproJuy, para la recepción de apuestas. Título de propiedad o contrato de alquiler del local que acredite la disponibilidad del mismo, para la explotación de la agencia.</li>
                        <li>Constancia expedida por Tribunales para acreditar que no está atravesando un proceso judicial. Se pide en Mesa General de Entradas de Tribunales mediante nota dirigida a la Jefa de Mesa General de Entradas.</li>
                        <li>Tener Caja de Ahorro o Cta. Corriente Bancaria (CBU).</li>
                        <li>Constancia de Inscripción en Rentas.</li>
                        <li>Constancia de Inscripción en Afip.</li>
                        <li>Contar con adecuada conexión a Internet.</li>
                        <li>Constituir Garantía según lo establecido por el InproJuy, en cuanto a Modalidad y Monto.</li>
                    </ul>
                </div>
            </div>

            <br />

            <div className='contcaja'>
                <div className='cajaroja'>
                    <h2 className='titulocaja'>Personas Jurídicas</h2>
                </div>

                <div className='cuerpo'>
                    <ul>
                        <li>Nota de Pedido del interesado/da.</li>
                        <li>Cumplimiento de los puntos 2 a 13 establecidos para Personas Físicas.</li>
                        <li>Acta de Constitución.</li>
                        <li>Estatuto o Contrato Social, cuyo objeto social deberá incluir venta de billetes de lotería, <br />explotación de quiniela y de otros juegos de azar autorizados por la normativa pertinente.</li>
                        <li>Acta de designación de autoridades.</li>
                        <li>Acta de distribución de cargos.</li>
                        <li>Constancias de las inscripciones impositivas, tributarias y previsionales correspondientes.</li>
                        <li>último estado de situación patrimonial firmado por contador público nacional e <br />intervenido por el colegio profesional correspondiente.</li>
                        <li>Declaración jurada del impuesto a las ganancias del período anterior al de la solicitud para <br />ser aceptado como Agente Oficial.</li>
                    </ul>
                </div>
            </div>

            <br />

            <div className='contcaja'>
                <div className='cajazul'>
                    <h2 className='titulocaja'>Apertura Sub Agencias</h2>
                </div>

                <div className='cuerpo'>
                    <ul>
                        <li>Nota de Pedido del Titular de la Agencia para apertura de sub agencia.</li>
                        <li>Fotocopia del D.N.I. ambos lados del Sub Agente.</li>
                        <li>Constancia de CUIL del Sub Agente.</li>
                        <li>Local con acceso directo al público e instalaciones adecuadas para la recepción de <br />apuestas y disponibilidad del mismo (se verifica con Inspección del área correspondiente del INPROJUY).</li>
                        <li>Indicar números de contactos del Sub Agente, Fijo o Celular.</li>
                        <li>Contar con adecuada conexión a Internet.</li>
                    </ul>
                </div>
            </div>

            <br />

            <div className='contcaja'>
                <div className='cajazul'>
                    <h2 className='titulocaja'>Habilitación de Corredores</h2>
                </div>

                <div className='cuerpo'>
                    <ul>
                        <li>Nota de pedido solicitando habilitación.</li>
                        <li>Fotocopia de D.N.I.</li>
                        <li>Constancia de CUIL.</li>
                        <li>Indicar números de Contactos del Corredor, fijo o celular.</li>
                    </ul>
                </div>
            </div>

            <br />

            <div className='contcaja'>
                <div className='cajagris'>
                    <h2 className='titulocaja'>Cambio de Titularidad</h2>
                </div>

                <div className='cuerpo'>
                    <ul>
                        <li>Solicitud de autorización.</li>
                        <li>Cumplimiento por el titular propuesto de toda la documentación y condiciones exigidas <br />por el INPROJUY para ser Agente Oficial.</li>
                    </ul>
                </div>
            </div>

            <br />

            <div className='contcaja'>
                <div className='cajagris'>
                    <h2 className='titulocaja'>Baja de Agencia</h2>
                </div>

                <div className='cuerpo'>
                    <ul>
                        <li>Nota de pedido solicitando la baja de agencia, detallando los motivos de la misma.</li>
                        <li>Cancelación de todas las liquidaciones pendientes.</li>
                    </ul>
                </div>
            </div>

            <br />

            <div className='contcaja'>
                <div className='cajagris'>
                    <h2 className='titulocaja'>Transferencia de Agencia</h2>
                </div>

                <div className='cuerpo'>
                    <ul>
                        <li>Nota de pedido solicitando la transferencia de agencia.</li>
                        <li>Cumplimiento por el titular propuesto de toda la documentación y condiciones exigidas <br />por el INPROJUY para ser Agente Oficial.</li>
                    </ul>
                </div>
            </div>

            <br />

            <button className='btn btn-primary text-white'>Descargar PDF</button>
        </div>
    )
}

export default Agencias