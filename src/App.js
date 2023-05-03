import NavBar from './components/NavBar';
import {  Routes, HashRouter, Route, Router } from 'react-router-dom';
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
import NotiSeminario from './paginas/NotiSeminario';
import NotiDiagenciero from './paginas/NotiDiagenciero';
import Enconstruccion from './paginas/Enconstruccion';
import Reglamentos from './paginas/Reglamentos';
import { AuthProvider} from './context/AuthContext';
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


function App() {
  return (
    <AuthProvider>
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
          <Route path='/dondejuego' element={<DondeJuego/>} />
          <Route path='/notiAgendame' element={<NotiAgendame/>} />
          <Route path='/notiCapacitacion' element={<NotiCapacitacion/>} />
          <Route path='/notiPrevencion' element={<NotiPrevencion/>} />
          <Route path='/notiSeminario' element={<NotiSeminario/>} />
          <Route path='/notiDiagenciero' element={<NotiDiagenciero/>} />
          <Route path='/comotrabajamos' element={<ComoTrabajamos/>} />
          <Route path='/quetaljuego' element={<Quetaljuegoyo/>} />
          <Route path='/sitiosautorizados' element={<SitiosAutorizados/>} />
          <Route path='/mitosyverdades' element={<Mitosyverdades/>} />
          <Route path='/recomendaciones' element={<Recomendaciones/>} />
          <Route path='/reglamentos' element={<Reglamentos/>} />
          <Route path='/lugaresdeayuda' element={<LugaresdeAyuda/>} />
          <Route path='/enconstruccion' element={<Enconstruccion/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/reset' element={<Reset/>} />






        </Routes>
       
        <Footer/>
      </HashRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
