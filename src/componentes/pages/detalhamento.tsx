import { useEffect, useState } from 'react';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';
import { Pontos } from '../types/pontos';


function Detalhamento(){
    const [loading, setLoading] = useState(false);
    const [Pontos, setPontos] = useState<Pontos[]>([]);

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
            {!loading && (
                <h1>Carregando conteúdo ...</h1>
            )}

            {loading && (

            <div className='teste'>
                {Pontos.map((item) =>(
                    <div>
                    {item.id}
                    {item.title}
                    {item.userId}
                    </div>
                ))}
            </div>

            )}
         
        </div>
    );   
}

export default Detalhamento;

