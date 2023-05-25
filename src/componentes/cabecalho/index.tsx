import '../../estilos/estilos.css'
import Menu from '../menu';

function Cabecalho(){
    return(
        <div>
            <div>
                <Menu 
                item1={'Contatos'}
                item2={'Sobre'}
                item3={'Recenbendo'} />
            </div>
        </div>
    )
}

export default Cabecalho;