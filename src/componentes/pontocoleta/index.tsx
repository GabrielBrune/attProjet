import { Link } from 'react-router-dom'
import '../../estilos/estilos.css'


type Props={
    dados:{
        userId:string,
        id:string,
        title:string,
        completed:boolean
    }
}

function PontoColeta({dados} : Props){
    
    return(
        <div>
            <div>
                {dados.title}
                {dados.id}
                {dados.userId}
            </div>
            <div>
                <Link to='/detalhamento/:id'>Saiba Mais</Link>
            </div>
        </div>
    )
}

export default PontoColeta;