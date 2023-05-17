import React from 'react'
import Cards from '../components/Cards/Cards'

const Noticias = () => {
  return (
    <div className='container-fluid p-4 text-white'>
        <center><h1 className='botonbordeazul p-2'>Noticias</h1></center>
<div className='' >
        <Cards showAllCards={true} />
</div>
    </div>
  )
}

export default Noticias