import '../../estilos/estilos.css'
import Menu from '../menu';

function Cabecalho(){
    return(
            <div className='cabPai' >
                <Menu 
                item1='Cadastro dos pontos'
                item2='Sobre'
                item3='Voltar para a home' />
            </div>
    )
}

export default Cabecalho;