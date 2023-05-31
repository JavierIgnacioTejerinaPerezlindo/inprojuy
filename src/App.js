import NavBar from './components/NavBar';
import { Routes, HashRouter, Route, Router } from 'react-router-dom';
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
import NotiAgendame from './paginas/NotiAgendame';
import NotiCapacitacion from './paginas/NotiCapacitacion';
import NotiPrevencion from './paginas/NotiPrevencion';
import Lavadodeactivos from './paginas/LavadoDeActivos';
import Certificados from './paginas/noticias/Certificados';
import Diplomatura from './paginas/noticias/Diplomatura';
import NotiSeminario from './paginas/NotiSeminario';
import NotiDiagenciero from './paginas/NotiDiagenciero';
import Enconstruccion from './paginas/Enconstruccion';
import Reglamentos from './paginas/Reglamentos';
import { AuthProvider } from './context/AuthContext';
import Login from './paginas/Login';
import Register from './paginas/Register';
import Reset from './paginas/Reset';
import LugaresdeAyuda from './paginas/LugaresdeAyuda';
import ComoTrabajamos from './paginas/ComoTrabajamos';
import Quetaljuegoyo from './paginas/Quetaljuegoyo';
import SitiosAutorizados from './paginas/SitiosAutorizados';
import Mitosyverdades from './paginas/Mitosyverdades';
import Recomendaciones from './paginas/Recomendaciones';
import DondeJuego from './paginas/DondeJuego';
import NoGanadores from './components/cuponesNo/NoGanadores';
import ProfileForm from './components/ProfileForm';
import Videounamas from './paginas/Videounamas';

import NotiGanadores from './paginas/NotiGanadores';
import React, { useState, useEffect } from 'react';
import InproLoader from './components/loader/Loader';
import Wrapper from './components/loader/Wrapper';
import QuienesPuedenParticipar from './paginas/una mas/QuienesPuedenParticipar';
import ComoCargarCupon from './paginas/una mas/ComoCargarCupon';
import CuandoSortea from './paginas/una mas/CuandoSortea';
import Premios from './paginas/una mas/Premios';




function App() {
  const [loading, setLoading] = useState(true);

  const toggleLoading = () => {
    setLoading(!loading);
    console.log("loading", loading)

  };
  useEffect(() => {
    const handleLoad = () => {
      toggleLoading();
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  console.log("loading", loading)
  return (
    <AuthProvider>
      <div className="App">
        <Wrapper loading={loading}>
          <HashRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/juegoonline' element={<JuegoOnline />} />
              <Route path='/juegoResponsable' element={<JuegoResponsable />} />
              {/*           <Route path='/juegoilegal' element={<JuegoIlegal />} /> */}
              <Route path='/noticias' element={<Noticias />} />
              <Route path='/institucionalMision' element={<InstitucionalMision />} />
              <Route path='/mision' element={<InstitucionalMision />} />
              <Route path='/autoridades' element={<InstitucionalAutoridades />} />
              <Route path='/delegaciones' element={<InstitucionalDelegaciones />} />
              <Route path='/agencias' element={<Agencias />} />
              <Route path='/dondejuego' element={<DondeJuego />} />
              <Route path='/notiAgendame' element={<NotiAgendame />} />
              <Route path='/notiganadores' element={<NotiGanadores />} />
              <Route path='/notiCapacitacion' element={<NotiCapacitacion />} />
              <Route path='/notiPrevencion' element={<NotiPrevencion />} />
              <Route path='/lavadodeactivos' element={<Lavadodeactivos/>} />
              <Route path='/certificados' element={<Certificados/>} />
              <Route path='/diplomatura' element={<Diplomatura/>} />
              <Route path='/notiSeminario' element={<NotiSeminario />} />
              <Route path='/notiDiagenciero' element={<NotiDiagenciero />} />
              <Route path='/videounamas' element={<Videounamas />} />

              <Route path='/comotrabajamos' element={<ComoTrabajamos />} />
              <Route path='/quetaljuego' element={<Quetaljuegoyo />} />
              <Route path='/sitiosautorizados' element={<SitiosAutorizados />} />
              <Route path='/mitosyverdades' element={<Mitosyverdades />} />
              <Route path='/recomendaciones' element={<Recomendaciones />} />
              <Route path='/reglamentos' element={<Reglamentos />} />
              <Route path='/lugaresdeayuda' element={<LugaresdeAyuda />} />
              <Route path='/enconstruccion' element={<Enconstruccion />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/reset' element={<Reset />} />
              <Route path='/noganadores' element={<NoGanadores />} />
              <Route path='/profile' element={<ProfileForm />} />
              <Route path='/comocargarcupon' element={<ComoCargarCupon/>} />
              <Route path='/cuandosortea' element={<CuandoSortea/>} />
              <Route path='/premios' element={<Premios/>} />
              <Route path='/quienespueden' element={<QuienesPuedenParticipar />} />





            </Routes>

            <Footer />
          </HashRouter>
        </Wrapper>
      </div>
    </AuthProvider>
  );
}

export default App;