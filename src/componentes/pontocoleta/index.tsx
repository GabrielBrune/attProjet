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
                    <div className='button-home'>
               <button onClick={Mostrartodos} className='buttom'>Saiba mais</button>
            </div>
                </div>
              )}
                {!Show && (
                    <div className='box-container'>
                        {/* <div className='IMG'>IMG</div> */}
                        <div className='NOME'>NOME</div>  
                        <div className='CEP'>CEP</div>
                        <div className='LOG'>LOGRADOURO</div>  
                        <div className='NUM'>NUMERO"CASA</div>
                        <div className='COMPLE'>COMPLEMENTO</div>  
                        <div className='BAIRRO'>BAIRRO</div>
                        <div className='CDD'>CIDADE</div>  
                        <div className='EST'>ESTADO</div>
                        <div className='DATI'>DATAINICIO</div>  
                        <div className='DATT'>DATATERMINO</div>
                        <div className='TELE'>TELEFONE</div>  
                        <div className='EMAIL'>EMAIL</div>
                        <div className='DESC'>DESCRIÇÃO</div>
                        <div className='button-home'>
               <button onClick={Mostrartodos} className='buttom'>Saiba mais</button>
            </div>
                    </div>
                    
                )}
            
        </div>
    )
    
}

export default PontoColeta;