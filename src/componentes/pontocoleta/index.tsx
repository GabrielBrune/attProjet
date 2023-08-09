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
        <div key={chave} className='feeds'>
              {Show && (
                <div>
                    <div className='box-container'>
                        <div className='nome-empresa-nmst'>
                            <p>nome entidade</p>
                        </div>
                        <div className='data-i'>
                            <p>data Inicio</p>   
                        </div>
                        <div className='data-t'>
                            <p>data Termino</p>
                        </div>
                    </div>
                </div>
              )}
                {!Show && (
                    <div className='box-container'>
                        <div>IMG</div>
                        <div>NOME</div>  
                        <div>CEP</div>
                        <div>LOGRADOURO</div>  
                        <div>NUMERO"CASA</div>
                        <div>COMPLEMENTO</div>  
                        <div>BAIRRO</div>
                        <div>CIDADE</div>  
                        <div>ESTADO</div>
                        <div>DATAINICIO</div>  
                        <div>DATATERMINO</div>
                        <div>DESCRIÇÃO</div>  
                        <div>TELEFONE</div>  
                        <div>EMAIL</div>
                    </div>
                )}
            <div>
               <button onClick={Mostrartodos} className='button-home'>Saiba mais</button>
            </div>
        </div>
    )
    
}

export default PontoColeta;