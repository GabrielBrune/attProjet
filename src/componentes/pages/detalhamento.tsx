import { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../../api';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';
import ListPedidos from '../ListPedidos';
import PontoColeta from '../pontocoleta';
import { tpPontos } from '../types/pontos';


function Detalhamento(){
    const [loading, setLoading] = useState(false);
    const [Pontos, setPontos] = useState<tpPontos[]>([]);
    // const [paramID, setParamID] = useState('');

const carregarPontos = async () =>{
   setLoading(true);
   
   try{
    
        let json = await api.listPointID();
        const dataArray = Array.isArray(json)? json : [json];
        
        setPontos(dataArray);

    } catch (e){
        alert('Falha no carregamento das informação');
        setLoading(false);
        console.error(e);
    }
    
    // const handleParamIDChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setParamID(e.target.value)
    // }   
    
    // useEffect(() => {
    //     handleParamIDChange
    // } , []);
    
}

    return(
        <div>
            <div>
                <Cabecalho />
            </div>
            {!loading && (
                <button onClick={carregarPontos}>Carregando conteúdo</button>
            )}

            {loading && (

            <div className='teste'>
                {Pontos.map((item,index) =>(
                    <div>
                    <ListPedidos chave={index} dados={item} />
                    </div>
                ))}
            </div>

            )}
         
        </div>
    );   
}

export default Detalhamento;

