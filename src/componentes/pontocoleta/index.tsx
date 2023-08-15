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
                        <img className='home-card-img' src="" />                         
                        <div className='Img'
                            style={{                                
                                backgroundImage: "url(" + "https://lh3.googleusercontent.com/p/AF1QipPtyqWZ3CHr4YHtY5QUfxy8vO67wyXNxlPRyA05=s680-w680-h510" + ")",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                }}>                            
                        </div>
                        <div className='trent'>
                            <tbody>
                                <tr>
                                    <td>ENTIDADE:</td>
                                </tr>
                                <tr>
                                    <td> DATA DE INÍCIO:</td>
                                </tr>                                                                      
                                <tr>
                                    <td>DATA DE TÉRMINO:</td>
                                </tr>                                   
                            </tbody>
                        </div>
                    </div>
                    <div className='button-home'>
                        <button onClick={Mostrartodos} className='buttom'>Saiba mais</button>
                    </div>
                </div>
              )}
                {!Show && (
                    <div className='box-container'>
                         <div className='Img'
                         style={{                                
                            backgroundImage: "url(" + "https://lh3.googleusercontent.com/p/AF1QipPtyqWZ3CHr4YHtY5QUfxy8vO67wyXNxlPRyA05=s680-w680-h510" + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            }}>                            
                            </div>
                     
                        <div className='tabelahome'>
                            <tbody>
                                <tr>
                                    <td>Nome:</td>
                                    <td>Cep:</td>
                                </tr>

                                <tr>
                                    <td>Lougradouro:</td>
                                    <td>Numero:</td>
                                </tr>

                                <tr>
                                    <td>Complemento:</td>
                                    <td>Bairro:</td>
                                </tr>
                                
                                <tr>
                                    <td>Cidade:</td>
                                    <td>Estado:</td>
                                </tr>
                                
                                <tr>
                                    <td>Data Inicio:</td>
                                    <td>Data termino:</td>
                                </tr>
                                
                                <tr>
                                    <td>Telefone:</td>
                                    <td>Email:</td>
                                </tr>
                                <tr>
                                    
                                    

                                </tr>
                            </tbody>
                            <div className='desc'>
                                        Descrição:
                                        
                            </div>
                        </div>
                        <div className='button-home'>
                            <button onClick={Mostrartodos} className='buttom'>Saiba mais</button>
                        </div>
                    </div>
                    
                )}
            
        </div>
    )
    
}

export default PontoColeta;