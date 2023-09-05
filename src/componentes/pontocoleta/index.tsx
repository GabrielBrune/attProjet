import { useContext, useState } from 'react'
import '../../estilos/estilos.css'
import { tpPontos } from '../types/pontos'
import { UsuarioLogadoContext } from '../contexts/contextAuth'


type Props={
    dados:tpPontos,
    index:number
    
}

function PontoColeta({dados} : Props, index:Props){
    const UseramdLogado = useContext(UsuarioLogadoContext)

    const [Show, setShow] = useState(true)

    function Mostrartodos(){
        if(Show){
            setShow(false)
        }else{
            setShow(true)
        }
    }


    return(
        <div key={index.index} className='feeds'>
            {Show && (
                    <div>
                        <div className='box-container'>                 
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
                                        <td>ENTIDADE: {dados.entidade}</td>
                                    </tr>
                                    <tr>
                                        <td> DATA DE INÍCIO: {dados.dataInicio}</td>
                                    </tr>                                                                      
                                    <tr>
                                        <td>DATA DE TÉRMINO: {dados.dataTermino}</td>
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
                                    <td>Nome: {dados.entidade}</td>
                                    <td>Cep: {dados.cep}</td>
                                </tr>

                                <tr>
                                    <td>Lougradouro: {dados.logradouro}</td>
                                    <td>Numero: {dados.numero}</td>
                                </tr>

                                <tr>
                                    <td>Complemento: {dados.complemento}</td>
                                    <td>Bairro: {dados.bairro}</td>
                                </tr>
                                
                                <tr>
                                    <td>Cidade: {dados.cidade}</td>
                                    <td>Estado: {dados.estado}</td>
                                </tr>
                                
                                <tr>
                                    <td>Data Inicio: {dados.dataInicio}</td>
                                    <td>Data termino: {dados.dataTermino}</td>
                                </tr>
                                
                                <tr>
                                    <td>Telefone: {dados.telefone}</td>
                                    <td>Email: {dados.email}</td>
                                </tr>
                                <tr>
                                    
                                    

                                </tr>
                            </tbody>
                            <div className='desc'>
                                        Descrição: {dados.descricao}
                                        
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