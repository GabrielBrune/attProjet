import { useState } from 'react'
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
    },
    chave:number
    
}

function PontoColeta({dados} : Props, chave:number){
    const [Show, setShow] = useState(true)

    function Mostrartodos(){
        if(Show){
            setShow(false)
        }else{
            setShow(true)
        }
    }


    return(
        <div key={chave}>
              {Show && (
                <div>
                    <div className='box-container'>
                        <div className='nome-empresa'>
                            {dados.nome}
                        </div>
                        <div className='data-it'>
                            {dados.dataInicio}
                            <br/>
                            {dados.dataTermino}
                        </div>
                        <h2>mostrando home</h2>
                    </div>
                </div>
              )}
                {!Show && (
                    <div>
                        <h1>mostrando detalhe</h1>
                        <div>{dados.img}</div>
                        <div>{dados.nome}</div>  
                        <div>{dados.cep}</div>
                        <div>{dados.logradouro}</div>  
                        <div>{dados.numero}</div>
                        <div>{dados.complemento}</div>  
                        <div>{dados.bairro}</div>
                        <div>{dados.cidade}</div>  
                        <div>{dados.estado}</div>
                        <div>{dados.dataInicio}</div>  
                        <div>{dados.dataTermino}</div>
                        <div>{dados.pontoRef}</div>  
                        <div>{dados.descricao}</div>
                        <div>{dados.telefone}</div>  
                        <div>{dados.email}</div>
                    </div>
                )}
            <div>
               <button onClick={Mostrartodos} >Saiba mais</button>
            </div>
        </div>
    )
    
}

export default PontoColeta;