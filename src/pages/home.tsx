import { useEffect, useState } from 'react';
import { api } from '../api';
import '../estilos/estilos.css'
import Cabecalho from '../componentes/cabecalho';
import PontoColeta from '../componentes/pontocoleta';
import { tpPontos } from '../componentes/types/pontos';


function Home(){
    
    const[pontos, setPontos] = useState<tpPontos[]>([]);
    const carregarPontos = async () =>{
    
            let json = await api.renderHome();
            const dataArray = Array.isArray(json)? json : [json];
            setPontos(dataArray);
    }

    useEffect(() => {
        carregarPontos();
    } , []);

    return(
        <div>
        
            <div>
            <Cabecalho /> 
            </div>

            <div className='bodyhome'>
                {pontos.map((item, index) =>(
                    
                    <div className='PontoColPrinc' key={index}>
                        <PontoColeta index={index} dados={item} />      
                    </div>

                ))}
            </div>
        
        </div>
    )

}

export default Home;