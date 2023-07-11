import { Link } from 'react-router-dom'
import '../../estilos/estilos.css'


type Props={
    dados:{
        nome:string, cep:BigInteger, logradouro:string,
        numero:BigInteger, complemento:string, bairro:string,cidade:string, estado:string, 
        dataInicio:BigInteger,dataTermino:BigInteger, pontoRef:string, descricao:string,
        telefone:BigInteger, email:string
    }
}

function PontoColeta({dados} : Props){
    
    return(
        <div>
            <div>
                <div>
                {dados.nome}
                </div>
                <div>
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