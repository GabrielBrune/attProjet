import { Route, Routes } from 'react-router-dom';
import Home from "./componentes/pages/home";
import NotFound from './componentes/pages/notFound';
import FormularioColeta from './componentes/pages/formularioColeta';
import CadastroColeta from './componentes/pages/cadastroColeta';
import Detalhamento from './componentes/pages/detalhamento';
import LogAdm from './componentes/pages/logAdm';







function App() {
  return (
    <div >
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/detalhamento/:id' element={<Detalhamento />} />
        <Route path='/cadastrocoleta'element={<CadastroColeta />} />
        <Route path='/formulariocoleta'element={<FormularioColeta />} />
        <Route path='/logdev'element={<LogAdm />} />
        <Route path="*" element={< NotFound />} />
      </Routes>
    </div >
  );
}

export default App;
