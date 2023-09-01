import { useEffect, useState } from 'react';
import { api } from '../../api';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';
import PontoColeta from '../pontocoleta';
import { tpPontos } from '../types/pontos';


function Home(){

    const[Pontos, setPontos] = useState<tpPontos[]>([]);

    useEffect(()=>{
        carregarPontos();
    })
const carregarPontos = async () =>{
   try{
          let json = await api.renderHome();
          const dataArray = Array.isArray(json)? json : [json];
        setPontos(dataArray);
    } catch (e){
        alert('Falha no carregamento das informações');
        console.error(e);
    }

}

    return(
        <div>
            <div>
                <Cabecalho /> 
            </div>
    
            <div className='corpPag'>

                <div className='bodyhome'>
                        {Pontos.map((item, index) =>(
                            
                            <div>
                                <PontoColeta chave={index} dados={item} />
                            </div>

                        ))}
                </div>

            </div>

        </div>
    )

}

export default Home;