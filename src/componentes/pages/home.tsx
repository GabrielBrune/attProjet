import { Link } from 'react-router-dom';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';
import Rodape from '../rodape';

function Home(){
    return(
        <div>
            <div>
                <Cabecalho />
            </div>
            <div className='bodyhome'>

                <div className='feeds'>
                        <Link to='/home/detalhamento/:Ponto1'>
                            PONTO DE COLETA 
                        </Link>
                    </div>
                    
                    <div className='feeds'>
                        <Link to='/home/detalhamento/:Ponto2'>
                            PONTO DE COLETA 
                        </Link>
                    </div>

                    <div className='feeds'>
                        <Link to='/home/detalhamento/:Ponto3'>
                            PONTO DE COLETA
                        </Link>
                    </div>

                    <div className='feeds'>
                        <Link to='/home/detalhamento/:Ponto4'>
                            PONTO DE COLETA
                        </Link>
                    </div>

                    <div className='feeds'>
                        <Link to='/home/detalhamento/:Ponto5'>
                            PONTO DE COLETA
                        </Link>
                    </div>

                    <Rodape />
            </div>
        </div>
    )

}

export default Home;