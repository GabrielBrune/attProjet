import { useNavigate } from 'react-router-dom';
import '../../estilos/estilos.css'
import Menu from '../menu';


function Cabecalho(){
 

    return(
            <div className='cabPai' >
                <Menu 
                item1='Home'
                item2='Cadastrar Pontos'
                />
            </div>
    )
}

export default Cabecalho;