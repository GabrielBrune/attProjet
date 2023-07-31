import { useEffect, useState } from 'react';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';
import PontoColeta from '../pontocoleta';
import { tpPontos } from '../types/pontos';


khfsdjmhdjh
function Home(){

    const[loading, setLoading] = useState(false);
    const[Pontos, setPontos] = useState<tpPontos[]>([]);

    useEffect(()=>{
        carregarPontos();
    })
const carregarPontos = async () =>{
   setLoading(true);
   try{
        // let json = await api.renderHome();
        // const dataArray = Array.isArray(json)? json : [json];

        let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        
        let json = await response.json();

        const dataArray = Array.isArray(json)? json : [json];
        
        setPontos(dataArray);
    } catch (e){
        alert('Falha no carregamento das informação');
        setLoading(false);
        console.error(e);
    }

}

    return(
        <div>
            <div>
                <Cabecalho /> 
            </div>
            {!loading &&(
                <h1>Erro ao carregar a home</h1>
            )}

            {loading && (
            <div className='corpPag'>
                <div className='bodyhome'>
                        {Pontos.map((item, index) =>(
                            <div className='feeds'>
                                <PontoColeta chave={index} dados={item} />
                            </div>
                        ))}
                </div>
            </div>
            )}
        </div>
    )

}

export default Home;