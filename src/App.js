import NavBar from './components/NavBar';
import { browseRouter, Routes, HashRouter, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Juegos from './paginas/Juegos';
import JuegoResponsable from './paginas/JuegoResponsable';
import JuegoIlegal from './paginas/JuegoIlegal';
import Noticias from './paginas/Noticias';
import Institucional from './paginas/Institucional';
import Footer from './components/Footer/Footer';
import 'animate.css/animate.min.css'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/juegos' element={<Juegos />} />
          <Route path='/juegoresponsable' element={<JuegoResponsable />} />
          <Route path='/juegoilegal' element={<JuegoIlegal />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/institucional' element={<Institucional />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
