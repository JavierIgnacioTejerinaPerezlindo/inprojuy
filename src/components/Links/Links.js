import React from "react";

const Links = () => {
    return(

    <div className="row p-5 container-fluid">
        <img src='./img/salasdejuego.jpg' useMap='#map2' className='rounded'/>
					<map name='map2'>
						<Link to={'/casinos'}><area shape='rect' coords='638, 159, 866, 474'/></Link>
					</map>
        <a className="col md-5 " href="https://casinosmacgroup.com/es/" target="_blank" ><img src="./img/WEB_1_06-1.png" className=" centrar img-fluid" ></img></a>
        <a className="col md-5" href="https://casinosmacgroup.com/es/" target="_blank" ><img src="./img/WEB_2_06-1.png" className=" centrar img-fluid"></img></a>
        <a   className="row p-5 justify-content-center" href="https://prensa.jujuy.gob.ar" target="_blank" ><img src=".\img\Jujuy-Manual-de-marca-491.png" className="logob"  ></img></a>

    </div>

)}
export default Links