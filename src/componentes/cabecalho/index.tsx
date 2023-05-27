import '../../estilos/estilos.css'
import Menu from '../menu';

function Cabecalho(){
    return(
        <div>
            <div>
                <Menu 
                item1='Cadastro dos pontos'
                item2='Sobre'
                item3='Voltar para a home' />
            </div>
        </div>
    )
}

export default Cabecalho;