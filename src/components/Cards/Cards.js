import Card from "./Card"
import { useEffect, useState } from "react"

const Cards = ({ showAllCards }) => {
  const [tabn, setTabn] = useState([])

  useEffect(() => {
    // pido los datos
    fetch('./noticias/noticias.json')
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json)
        setTabn(json)
      })
  }, [])

  let maxCards = showAllCards ? tabn.length : 4

  return (
    <div   className="wrapper " >
      {tabn.slice(0, maxCards).map((noticia, index) => (
        <Card
          key={index}
          titulo={noticia.titulo}
          imagen={noticia.imagen}
          texto={noticia.texto}
          linkN={noticia.linkn}
        />
      ))}
    </div>
  )
}

export default Cards
