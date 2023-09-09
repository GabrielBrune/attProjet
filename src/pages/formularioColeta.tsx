import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { UsuarioLogadoContext } from "../componentes/contexts/contextAuth";
import FormularioColeta from "../componentes/FormColeta";
import { tpPontos } from '../componentes/types/pontos';


function TelaForm() {
    const [pontos, setPontos] = useState<tpPontos[]>([])

    const UsuarioAdmLog = useContext(UsuarioLogadoContext);

    const navigation = useNavigate();

    function HandleDirection() {
        navigation('/logdev');
    }

    const handleInserir = async (
        img: string,
        nome: string,
        cep: string,
        logradouro: string,
        numero: string,
        complemento: string,
        bairro: string,
        cidade: string,
        estado: string,
        dataInicio: string,
        dataTermino: string,
        descricao: string,
        telefone: string,
        email: string) => {


        let json = await api.addPoint(
            img,
            nome,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            dataInicio,
            dataTermino,
            descricao,
            telefone,
            email
        );

        if (json.id) {
            alert('Ponto Adicionado com Sucesso!')
            setPontos((pontos) => [...pontos, json]);
        } else {
            alert('Ocorreu alguma falha no cadastro do ponto!\n\nErro: ' + json.message)
        }
    }

    return (
        <div >
            {(!UsuarioAdmLog?.name || UsuarioAdmLog?.name === null || UsuarioAdmLog?.name === undefined) &&
                <div>
                    <div className="Autorização">
                        <div
                            style={{
                                backgroundImage: `url('/Logo_branca.png')`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="divLogo"
                        ></div>
                        <div className="message_neg">
                            Acesso negado para esta página.<br />
                            Para acessá-la efetue o login de administrador.
                        </div>
                        <div>
                            <button onClick={HandleDirection} className='message_neg'>Clique Aqui</button>
                        </div>

                    </div>
                    <div className='informacoesColeta'>
                        <h2>Se você deseja que seja cadastrado um ponto de coleta ou doação de vestimentas, roupas, sapatos, etc. Nos encaminhe um email para o endereço aquecame@hotmail.com.br com as seguintes informações:</h2><br></br><br></br>
                        <p id='fontP'>Nome da entidade;<br></br>
                        A URL de uma imagem da entidade;<br></br>
                        CEP;<br></br>
                        Logradouro;<br></br> 
                        Número do endereço;<br></br>
                        Complemento;<br></br> 
                        Bairro;<br></br> 
                        Cidade;<br></br> 
                        Estado;<br></br> 
                        Telefone;<br></br>
                        Endereço de email;<br></br>
                        Data ínicio da coleta/doação;<br></br>
                        Data término da coleta/doação;<br></br>
                        Descrição do ponto de coleta/doação.</p>        
                    </div>
                </div>
            }

            {UsuarioAdmLog?.name &&
                <div className='telaForm'>
                    <FormularioColeta onAdd={handleInserir} />
                </div>
            }
        </div>
    );
}

export default TelaForm;