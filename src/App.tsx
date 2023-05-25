import { Route, Routes } from 'react-router-dom';
import Home from "./componentes/pages/home";
import NotFound from './componentes/pages/notFound';
import Caminho1 from './componentes/pages/contatos';
import Caminho2 from './componentes/pages/sobre';
import Caminho3 from './componentes/pages/recebento';






function App() {
  return (
    <div >
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/home/contatos'element={<Caminho1 />} />
        <Route path='/home/sobre'element={<Caminho2 />} />
        <Route path='/home/recebendo'element={<Caminho3 />} />
        < Route path="*" element={< NotFound />} />

      </Routes>
    </div >
  );
}

export default App;
