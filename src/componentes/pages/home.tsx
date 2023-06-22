import { useState } from 'react';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';
import PontoColeta from '../pontocoleta';
import { Pontos } from '../types/pontos';



function Home(){
    //const[loading, setLoading] = useState(false);
    
    const[Pontos, setPontos] = useState<Pontos[]>([]);

    //setLoading(true);

    return(
        <div>
            <div>
                <Cabecalho />
            </div>
             <div className=''>
                {Pontos.map((item, index) =>(
                    <PontoColeta key={index} dados={item} />
                ))}
            </div>
        </div>
    )

}

export default Home;