import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Pagina1 from './paginas/Pagina1';
import Pagina2 from './paginas/Pagina2';
import Pagina3 from './paginas/Pagina3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/pagina1' element={<Pagina1 />} />
          <Route path='/pagina2' element={<Pagina2 />} />
          <Route path='/pagina3' element={<Pagina3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
