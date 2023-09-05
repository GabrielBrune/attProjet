import { useContext, useState } from 'react'
import '../../estilos/estilos.css'
import { tpPontos } from '../types/pontos'
import { UsuarioLogadoContext } from '../contexts/contextAuth'
import { api } from '../../api'


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

    function handleDelete(){
        if(dados.id){
            ExcluirPonto(dados)
        }
    }

    
    const ExcluirPonto = async (dados : tpPontos) =>{

        let response = await api.removePoint(dados.id)
    }


    return(
        <div key={index.index} className='feeds'>
        {UseramdLogado?.name && (
            <>
            {Show && (
                    <div>
                        <div className='box-container'>                 
                            <div className='Img'
                                style={{                                
                                    backgroundImage: `url(${dados.img})`,
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
                            <button onClick={handleDelete} className='buttom'>Excluir</button>
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
                            backgroundImage: `url(${dados.img})`,
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
                            <button onClick={handleDelete} className='buttom'>Excluir</button>
                        </div>
                        
                        <div className='button-home'>
                            <button onClick={Mostrartodos} className='buttom'>Saiba mais</button>
                        </div>
                    </div>    
                )}
                </>
                )}
                {(!UseramdLogado?.name || UseramdLogado?.name === null || UseramdLogado?.name === undefined)&&(
                    <>
                    {Show && (
                    <div>
                        <div className='box-container'>                 
                            <div className='Img'
                                style={{                                
                                    backgroundImage: `url(${dados.img})`,
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
                            backgroundImage: `url(${dados.img})`,
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
                    </>
                )}
        </div>
    )
}

export default PontoColeta;