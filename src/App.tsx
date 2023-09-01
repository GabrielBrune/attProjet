import { Route, Routes } from 'react-router-dom';
import Home from "./componentes/pages/home";
import NotFound from './componentes/pages/notFound';
import FormularioColeta from './componentes/pages/formularioColeta';
import Pedidos from './componentes/pages/Pedidos';
import LogAdm from './componentes/pages/logAdm';
import { UsuarioLogadoProvider } from './componentes/contexts/contextAuth';
import Sobre from './componentes/pages/sobre';



function App() {
  return (
    <div >
      <UsuarioLogadoProvider>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/pedidos'element={<Pedidos />} />
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
