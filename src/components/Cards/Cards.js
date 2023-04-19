import Card from "./Card"
import './Cards.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'


const Cards = () => {
    const [tabn, setTabn] = useState([])


    useEffect(() => {
        //pido los datos 
        fetch('./noticias/noticias.json')
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)
                setTabn(json)
            })


    }, [])
    return (
        <div className="container  justify-content-center align-items-center p-3 ">
            <div className=" row">

                {
                    tabn.map(tabn => {
                        return (
                            <div className="col-md-3" key={tabn.idnoticia}>
                                <Card titulo={tabn.titulo} imagen={tabn.imagen} texto={tabn.texto} linkN={tabn.linkn} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}
export default Cards
