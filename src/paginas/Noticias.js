import React from 'react'
import Cards from '../components/Cards/Cards'

const Noticias = () => {
  return (
    <div className='container-fluid contenedorcardnoti'>
        <center><h1>Noticias</h1></center>
<div >
        <Cards showAllCards={true} />
</div>
    </div>
  )
}

export default Noticias