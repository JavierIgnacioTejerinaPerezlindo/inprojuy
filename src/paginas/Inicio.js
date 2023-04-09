import React from 'react';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';
import '../components/Cards/Cards.css'


const Inicio = () => {
  return (
    <div  className='Cards' >
      <Carrousel/>
      <div>
      <Cards />

      </div>
    
      <div className='container p-3'>
          <a href='https://juj.lotemovil.com.ar/' ><img src= '..\img\placadesvio.jpg' width='100%'/></a></div>
      
    </div>
   
  )
}

export default Inicio