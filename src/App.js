import NavBar from './components/NavBar';
import { browseRouter, Routes, HashRouter, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import JuegoOnline from './paginas/JuegoOnline';
import JuegoResponsable from './paginas/JuegoResponsable';
import JuegoIlegal from './paginas/JuegoIlegal';
import Noticias from './paginas/Noticias';
import Institucional from './paginas/Institucional';
import Footer from './components/Footer/Footer';
import InstitucionalMision from './paginas/InstitucionalMision';
import InstitucionalAutoridades from './paginas/InstitucionalAutoridades';
import InstitucionalDelegaciones from './paginas/InstitucionalDelegaciones';
import 'animate.css/animate.min.css'
import Agencias from './paginas/Agencias';




function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/juegoonline' element={<JuegoOnline />} />
          <Route path='/juegoResponsable' element={<JuegoResponsable />} />
{/*           <Route path='/juegoilegal' element={<JuegoIlegal />} /> */}
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/institucionalMision' element={<InstitucionalMision />} />
          <Route path='/mision' element={<InstitucionalMision />} />
          <Route path='/autoridades' element={<InstitucionalAutoridades />} />
          <Route path='/delegaciones' element={<InstitucionalDelegaciones/>} />
          <Route path='/agencias' element={<Agencias/>} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
