import React from 'react'
import { Link } from 'react-router-dom';

const Enconstruccion = () => {
    return (
        <div className='container fondotransparente p-5'>
            <Link to={'/'}>
                <img src='.\img\placadesvio.jpg' className='img-fluid rounded' />
            </Link>
        </div>
    )
}

export default Enconstruccion