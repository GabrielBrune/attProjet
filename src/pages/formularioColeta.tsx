import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { UsuarioLogadoContext } from "../componentes/contexts/contextAuth";
import FormularioColeta from "../componentes/FormColeta";
import { tpPontos } from '../componentes/types/pontos';


function TelaForm() {
    const [pontos, setPontos] = useState<tpPontos[]>([])

    const UsuarioAdmLog = useContext(UsuarioLogadoContext);
    ////
    const navigation = useNavigate();

    function HandleDirection(){
        navigation('/logdev');
    }

    const handleInserir = async (
        img:string,
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
            alert('Ocorreu alguma falha no cadastro do ponto!\n\nErro: '+json.message)
        }
    }

    return (
        <div>
            {(!UsuarioAdmLog?.name || UsuarioAdmLog?.name === null || UsuarioAdmLog?.name === undefined) && 
                <>
                <div className="Autorização">
                    <div className="message_neg">
                        Acesso negado para esta página.<br />
                        Para acessá-la efetue o login de administrador.
                    </div>
                    <div>
                        <button onClick={HandleDirection} className='message_neg'>Clique Aqui</button>
                    </div>

                </div>
                </>
            }
            
            {UsuarioAdmLog?.name &&
            <>
                <FormularioColeta onAdd={handleInserir} />
            </>
            }
        </div>
    );
}

export default TelaForm;