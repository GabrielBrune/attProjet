import { Link } from 'react-router-dom'
import '../../estilos/estilos.css'


type Props={
    dados:{
        img:string,
        nome:string, 
        cep:string, 
        logradouro:string,
        numero:string, 
        complemento:string, 
        bairro:string,
        cidade:string, 
        estado:string, 
        dataInicio:string,
        dataTermino:string, 
        pontoRef:string, 
        descricao:string,
        telefone:string, 
        email:string
    }
}

function PontoColeta({dados} : Props){
    
    return(
        <div>
            <div className='box-container'>
                <div className='nome-empresa'>
                {dados.nome}
                </div>
                <div className='data-it'>
                {dados.dataInicio}
                {dados.dataTermino}
                </div>
            </div>
            <div>
                <Link to='/detalhamento/'>Saiba Mais</Link>
            </div>
        </div>
    )
}

export default PontoColeta;