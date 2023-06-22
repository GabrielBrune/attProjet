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
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/:id');
        
        let json = await response.json();

        const array = Array.isArray(json)? json : [json];
        
        setPontos(array);
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

            <div>
                {Pontos.length}
            </div>

            )}
         
        </div>
    );   
}

export default Detalhamento;