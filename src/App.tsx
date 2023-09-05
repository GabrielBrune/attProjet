import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import NotFound from './pages/notFound';
import FormularioColeta from './pages/formularioColeta';
import LogAdm from './pages/logAdm';
import { UsuarioLogadoProvider } from './componentes/contexts/contextAuth';
import Sobre from './pages/sobre';



function App() {
  return (
    <div >
      <UsuarioLogadoProvider>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/formulariocoleta'element={<FormularioColeta />} />
        <Route path='/logdev'element={<LogAdm />} />
        <Route path="*" element={< NotFound />} />
        <Route path="/sobre" element={<Sobre />}/>
      </Routes>
      </UsuarioLogadoProvider>
    </div >
  );
}

export default App;
