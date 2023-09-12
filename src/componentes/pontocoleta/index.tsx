import { useContext, useState } from 'react'
import '../../estilos/estilos.css'
import { tpPontos } from '../types/pontos'
import { UsuarioLogadoContext } from '../contexts/contextAuth'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'


type Props={
    dados:tpPontos,
    index:number
    
}

function PontoColeta({dados} : Props, index:Props){
    const UseramdLogado = useContext(UsuarioLogadoContext)
    const [Show, setShow] = useState(true)

    const[pontos, setPontos] = useState<tpPontos[]>([]);
    const carregarPontos = async () =>{
    
            let json = await api.renderHome();
            const dataArray = Array.isArray(json)? json : [json];
            setPontos(dataArray);
    }

    function handleDelete(){
        if(dados.id){
            ExcluirPonto(dados)
            carregarPontos()
            alert("Ponto Excluido!")
        }else{
            carregarPontos()
        }
    }

    const ExcluirPonto = async (dados : tpPontos) =>{

        let response = await api.removePoint(dados.id)
    }

    function Mostrartodos(){
        if(Show){
            setShow(false)
        }else{
            setShow(true)
        }
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
                                    <tr className='tr'>
                                        <td className='td'> <b>ENTIDADE:</b> {dados.entidade}</td>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'> <b>DATA DE INÍCIO:</b> {dados.dataInicio}</td>
                                    </tr>                                                                      
                                    <tr className='tr'>
                                        <td className='td'><b>DATA DE TÉRMINO:</b> {dados.dataTermino}</td>
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
                                    <td><b>Nome:</b> {dados.entidade}</td>
                                    <td><b>CEP:</b> {dados.cep}</td>
                                </tr>

                                <tr>
                                    <td><b>Logradouro:</b> {dados.logradouro}</td>
                                    <td><b>Número:</b> {dados.numero}</td>
                                </tr>

                                <tr>
                                    <td><b>Complemento:</b> {dados.complemento}</td>
                                    <td><b>Bairro:</b> {dados.bairro}</td>
                                </tr>
                                
                                <tr>
                                    <td><b>Cidade:</b> {dados.cidade}</td>
                                    <td><b>Estado:</b> {dados.estado}</td>
                                </tr>
                                
                                <tr>
                                    <td><b>Data Início:</b> {dados.dataInicio}</td>
                                    <td><b>Data Término:</b>{dados.dataTermino}</td>
                                </tr>
                                
                                <tr>
                                    <td><b>Telefone:</b> {dados.telefone}</td>
                                    <td><b>Email:</b> {dados.email}</td>
                                </tr>
                            </tbody>
                            <div className='desc'>
                                <b>Descrição:</b> {dados.descricao}
                                        
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
                                    <tr className='tr'>
                                        <td className='td'><b>ENTIDADE:</b> {dados.entidade}</td>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'><b>DATA DE INÍCIO:</b> {dados.dataInicio}</td>
                                    </tr>                                                                      
                                    <tr className='tr'>
                                        <td className='td'><b>DATA DE TÉRMINO:</b> {dados.dataTermino}</td>
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
                                    <td><b>Nome:</b> {dados.entidade}</td>
                                    <td><b>CEP:</b> {dados.cep}</td>
                                </tr>

                                <tr>
                                    <td><b>Logradouro:</b> {dados.logradouro}</td>
                                    <td><b>Número:</b> {dados.numero}</td>
                                </tr>

                                <tr>
                                    <td><b>Complemento:</b> {dados.complemento}</td>
                                    <td><b>Bairro:</b> {dados.bairro}</td>
                                </tr>
                                
                                <tr>
                                    <td><b>Cidade:</b> {dados.cidade}</td>
                                    <td><b>Estado:</b> {dados.estado}</td>
                                </tr>
                                
                                <tr>
                                    <td><b>Data Início:</b> {dados.dataInicio}</td>
                                    <td><b>Data Término:</b>{dados.dataTermino}</td>
                                </tr>
                                
                                <tr>
                                    <td><b>Telefone:</b> {dados.telefone}</td>
                                    <td><b>Email:</b> {dados.email}</td>
                                </tr>
                            </tbody>
                            <div className='desc'>
                                <b>Descrição:</b> {dados.descricao}
                                        
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