import { useEffect, useState } from 'react';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';
import { tpPontos } from '../types/pontos';
import ListPedidos from '../ListPedidos';

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
                                <ListPedidos key={index} dados={item} />
                            </div>
                        ))}
        </div>
    )
}

export default Pedidos;