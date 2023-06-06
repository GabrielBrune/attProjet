import { useParams } from 'react-router-dom';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';

function Detalhamento(){
    const { Nome } = useParams();
    
    return(
        <div>
            {Nome}
            <div>
                <Cabecalho />
            </div>
            <h1>CONSTRUÇÃO EM </h1>
            <img src="https://media.istockphoto.com/id/484312622/pt/vetorial/bra%C3%A7o-rob%C3%B3tico-industrial-constru%C3%A7%C3%A3o-de-progresso-palavra.jpg?s=612x612&w=is&k=20&c=MlftyTCZeRLtsz41szPfhdoybui31UV5kU3q_xyEhIw="/>
        </div>
    );   
}

export default Detalhamento;