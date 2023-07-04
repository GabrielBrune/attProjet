import { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../../api';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';
import { Pontos } from '../types/pontos';


function Detalhamento(){
    const [loading, setLoading] = useState(false);
    const [Pontos, setPontos] = useState<Pontos[]>([]);
    const [paramID, setParamID] = useState('');

    useEffect(()=>{
        carregarPontos();
    })

const carregarPontos = async () =>{
   setLoading(true);
   
   try{
    
        let json = api.listPointID(paramID);
        const dataArray = Array.isArray(json)? json : [json];
        
        setPontos(dataArray);

    } catch (e){
        alert('Falha no carregamento das informação');
        setLoading(false);
        console.error(e);
    }
    
    const handleParamIDChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParamID(e.target.value)
    }   
    
    useEffect(() => {
        handleParamIDChange
    } , []);
    
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

