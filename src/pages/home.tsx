import { useContext, useEffect, useState } from 'react';
import { api } from '../api';
import '../estilos/estilos.css'
import Cabecalho from '../componentes/cabecalho';
import PontoColeta from '../componentes/pontocoleta';
import { tpPontos } from '../componentes/types/pontos';
import { UsuarioLogadoContext } from '../componentes/contexts/contextAuth';
import { useParams } from 'react-router-dom';


function Home(){
    const UseramdLogado = useContext(UsuarioLogadoContext)
    const[pontos, setPontos] = useState<tpPontos[]>([]);
    const {id} = useParams()

    const ExcluirPonto = async () =>{
        let response = await api.removePoint()
    }

    const carregarPontos = async () =>{
    
            let json = await api.renderHome();
            const dataArray = Array.isArray(json)? json : [json];
            setPontos(dataArray);
    }

    return(
        <div>
            {UseramdLogado?.name && (
                <div>
                    <div>
                    <Cabecalho /> 
                    </div>
    
                    <>
                        <button onClick={carregarPontos}>carregarPontos</button>

                        <div className='bodyhome'>
                                {pontos.map((item, index) =>(
                                    
                                    <div key={index}>
                                        <PontoColeta index={index} dados={item} />
                                        <div className='button-home'>
                                            <button onClick={ExcluirPonto} className='buttom'>Excluir</button>
                                        </div>
                                    </div>

                                ))}
                        </div>
                    </>
                </div>
            )}
            {(!UseramdLogado?.name || UseramdLogado?.name === null || UseramdLogado?.name === undefined) && (
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

            )}
        </div>
    )

}

export default Home;