import { useEffect, useState } from 'react';
import { api } from '../../api';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';
import PontoColeta from '../pontocoleta';
import { tpPontos } from '../types/pontos';


function Home(){

    const[pontos, setPontos] = useState<tpPontos[]>([]);

const carregarPontos = async () =>{
   
          let json = await api.renderHome();
          const dataArray = Array.isArray(json)? json : [json];
        setPontos(dataArray);
    

}

    return(
        <div>
            <div>
                <Cabecalho /> 
            </div>
    
            <div className='corpPag'>
                <button onClick={carregarPontos}>carregarPontos</button>

                <div className='bodyhome'>
                        {pontos.map((item, index) =>(
                            
                            <div key={index}>
                                <PontoColeta index={index} dados={item} />
                            </div>

                        ))}
                </div>

            </div>

        </div>
    )

}

export default Home;