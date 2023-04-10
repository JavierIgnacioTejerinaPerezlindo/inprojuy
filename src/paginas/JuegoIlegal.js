import React from 'react'

const JuegoIlegal = () => {
  return (
    <div className='container p-5'>
      <h2>Juego Ilegal</h2>
      <ul>
        <li>
          ES UN DELITO PENAL El 22 de diciembre de 2016 fue sancionada por el Congreso Nacional la Ley 27346 que además de gravar con nuevos impuestos al sector de los juegos de azar, incorpora un nuevo Articulo (301 bis) al Código Penal que reprime con prisión a quienes capten apuestan en forma ilegal.
        </li>
        <li>
          Ley 27346 Articulo bis: será reprimido con prisión de 3 a 6 años el que explotare, administrare, operare o de cualquier manera organizara, por si o a través de terceros, cualquier modalidad o sistema de captación de juegos de azar sin contar con la autorización pertinente emanada de la autoridad jurisdiccional competente.
        </li>
        <li>
          Mediante Ley Provincial Nº 6234 se crea el Ente Regulador, Controlador y Fiscalizador de los juegos de azar en todo el territorio de la provincia de Jujuy, dentro de las principales funciones, tiene el combatir y erradicar el juego ilegal. Con la finalidad de maximizar la luchas contra el juego ilegal que lleva el estado provincial, ponemos a disposición una herramienta que permite realizar denuncias anónimas descargando de esta pagina.
        </li>
      </ul>
      <h4>Formulario de denuncia</h4>
      <p>Vos también podes ayudar a combatir el juego clandestino. Si tenés datos para proporcionar sobre indicios de juego ilegal (personas físicas, puntos de venta, páginas web, redes sociales, etc), por favor realizá tu denuncia AQUI.</p>
      <form>
        <div class="mb-3">
          <label class="form-label">Apellido y Nombre</label>
          <input type="text" class="form-control" />
          <label class="form-label">Correo Electrónico</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <label class="form-label">Teléfono</label>
          <input type="tel" class="form-control" />
          <label class="form-label">Dirección</label>
          <input type="text" class="form-control" />
          <label class="form-label">Localidad</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Asistí al lugar</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Aposté</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Recibí un comprobante</label>
        </div>
        <label class="form-label">Dirección del lugar</label>
        <input type="text" class="form-control" />
        <label class="form-label">Entre calles/ Interseccion calle</label>
        <input type="text" class="form-control" />
        <div class="input-group">
        <label class="form-label">Foto del lugar</label>

          <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
        </div>
        <label class="form-label">EN LINEA</label>
        <label class="form-label">Pagina web</label>
        <input type="text" class="form-control" />
        <label class="form-label">Red Social</label>
        <input type="text" class="form-control" />
        <label class="form-label">Otro</label>
        <input type="text" class="form-control" />
        <div class="input-group">
        <label class="form-label">Foto del lugar</label>

          <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />

        </div>

      </form>
    </div>
  )
}

export default JuegoIlegal