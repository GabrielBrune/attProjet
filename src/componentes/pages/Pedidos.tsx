import { useEffect, useState } from 'react';
import Cabecalho from '../cabecalho';
import '../../estilos/estilos.css'
import ListPedidos from '../ListPedidos';
import { tpPontos } from '../types/pontos';

function Pedidos(){
    const [ListPonto, setPontos ] = useState <tpPontos[]>([]);

    useEffect(()=>{
        carregarPontos();
    });

    const carregarPontos = async () =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        let json = await response.json();

        const dataArray = Array.isArray(json)? json : [json];
        
        setPontos(dataArray);
    }
    return(
        <div>
            <div>
            <Cabecalho/>
            </div>
            {ListPonto.map((item, index) =>(
                            <div className='feeds'>
                                <ListPedidos chave={index} dados={item} />
                            </div>
                        ))}
        </div>
    )
}

export default Pedidos;