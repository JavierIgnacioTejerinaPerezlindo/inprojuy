import React from 'react'

const Denuncias = () => {
  return (
    <div className='fondotransparente container'>
        <center><h2 className='botonbordeazul text-white px-5 py-3 mb-4'>Denuncias</h2></center>
        <p>El juego ilegal es un delito, con penas de prisión de 3 a 6 años.</p>
 <p>El juego oficial sirve a la comunidad. Sus ingresos retornan a la sociedad, convertidos en obras y servicios.</p>
<p>Ingrese la mayor cantidad posible de datos que contribuyan a identificar dónde se practica el juego clandestino. El sistema de denuncias contra el juego clandestino y reclamos para apostadores ha sido creado para que usted pueda canalizar las denuncias, sugerencias, consultas o quejas, cada vez que lo requiera, asegurando la máxima confidencialidad.</p>

          <form className="contactform row g-3 mt-4">
        <div className='col-md-12 m-0 p-0'>
          <label className="h5 form-label">Apellido y Nombre</label>
          <input type="text" className=" form-control border px-3 py-2 rounded placeholder-gray-500" />
          <label className="h5 form-label">Correo Electrónico</label>
          <input type="email" className=" form-control border px-3 py-2 rounded placeholder-gray-500" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <label className="h5 form-label">Teléfono</label>
          <input type="tel" className=" form-control border px-3 py-2 rounded placeholder-gray-500" />
          <label className="h5 form-label">Dirección</label>
          <input type="text" className=" form-control border px-3 py-2 rounded placeholder-gray-500" />
          <label className="h5 form-label">Localidad</label>
          <input type="text" className=" form-control border px-3 py-2 rounded placeholder-gray-500" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Asistí al lugar</label>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Aposté</label>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Recibí un comprobante</label>
        </div>
        <div className='col-md-12 m-0 p-0'>
        <label className="h5 form-label">Dirección del lugar</label>
        <input type="text" className=" form-control border px-3 py-2 rounded placeholder-gray-500" />
        <label className="h5 form-label">Entre calles/ Interseccion calle</label>
        <input type="text" className=" form-control border px-3 py-2 rounded placeholder-gray-500" />
        <div className="input-group col-md-12 m-0">
          <label className="h5 col-md-12 form-label">Foto del lugar  </label>

          <input type="file" className="form-control  my-3 border px-3 py-2 rounded placeholder-gray-500" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
        </div>
        <label className="h5 form-label">EN LINEA:</label>
        <br/>
        <label className="h5 form-label">Pagina web</label>
        <input type="text" className=" form-control border px-3 py-2 rounded placeholder-gray-500" />
        <label className="h5 form-label">Red Social</label>
        <input type="text" className=" form-control border px-3 py-2 rounded placeholder-gray-500" />
        <label className="h5 form-label">Otro</label>
        <input type="text" className=" form-control border px-3 py-2 rounded placeholder-gray-500" />
        <div className="input-group">
          <label className="h5 col-md-12 form-label">Foto del sitio  </label>
          <input type="file" className=" form-control  my-3 border px-3 py-2 rounded placeholder-gray-500" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />

        </div>
</div>
      </form>
    </div>
  )
}

export default Denuncias