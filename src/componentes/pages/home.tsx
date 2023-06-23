import { useEffect, useState } from 'react';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';
import PontoColeta from '../pontocoleta';
import { Pontos } from '../types/pontos';



function Home(){

    const[loading, setLoading] = useState(false);
    const[Pontos, setPontos] = useState<Pontos[]>([]);

    useEffect(()=>{
        carregarPontos();
    })
const carregarPontos = async () =>{
   setLoading(true);
   try{
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
            <div className='corpPag'>
                <div className='bodyhome'>
                        {Pontos.map((item, index) =>(
                            <div className='feeds'>
                                <PontoColeta key={index} dados={item} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )

}

export default Home;