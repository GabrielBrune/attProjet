import '../../estilos/estilos.css'
import Menu from '../menu';
import { useState } from 'react'

function Cabecalho(){
    let [Show , setShow] = useState(true)
        if(!Show){
            Show = false
        }
        else(
            Show = true
        )
    return(
            <div className='cabPai' >
                <Menu 
                item1={Show? 'Cadastrar coleta': ''}
                item2='Sobre'
                item3='Voltar para a home' />
            </div>
    )
}

export default Cabecalho;