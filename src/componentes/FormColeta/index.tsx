import { ChangeEvent, useState } from 'react';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';

type Props = {
    onAdd : (
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
        email:string) => void; 

}

{/*ghggh*/}

function FormularioColeta({onAdd}:Props){

    function handleAddClick(){
        if(Nome && Cep && Logradouro && Numero 
            && Complemento && Bairro && Cidade &&
            Estado && DataInicio && DataTermino &&
            PontoRef && Descricao && Telefone && Email){

                onAdd(
                    Img,
                    Nome, 
                    Cep, 
                    Logradouro, 
                    Numero, 
                    Complemento, 
                    Bairro, 
                    Cidade,
                    Estado, 
                    DataInicio,
                    DataTermino, 
                    PontoRef, 
                    Descricao, 
                    Telefone, 
                    Email);
            }else{
                alert('Preencha todos os campos!')
            }
    }
    
    const[Img, setImg] = useState('')
    const handleImgAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setImg(e.target.value)
    )

    const[Bairro, setBairro] = useState('')
    const handleBairroAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setBairro(e.target.value)
    )

    const[Cep, setCep] = useState('')
    const handleCepAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setCep(e.target.value)
    )

    const[Cidade, setCidade] = useState('')
    const handleCidadeAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setCidade(e.target.value)
    )

    const[Complemento, setComplento] = useState('')
    const handleCompletoAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setComplento(e.target.value)
    )

    const[DataInicio, setDataInicio] = useState('')
    const handleDataInicioAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setDataInicio(e.target.value)
    )

    const[DataTermino, setDataTermino] = useState('')
    const handleDataTerminoAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setDataTermino(e.target.value)
    )

    const[Descricao, setDescricao] = useState('')
    const handleDescricaoAdd = (e:ChangeEvent<HTMLTextAreaElement>)=>(
        setDescricao(e.target.value)
    )

    const[Email, setEmail] = useState('')
    const handleEmailAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setEmail(e.target.value)
    )

    const[Estado, setEstado] = useState('')
    const handleEstadoAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setEstado(e.target.value)
    )

    const[Logradouro, setLogradouro] = useState('')
    const handleLogradouroAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setLogradouro(e.target.value)
    )

    const[Nome, setNome] = useState('')
    const handleNomeAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setNome(e.target.value)
    )

    const[Numero, setNumero] = useState('')
    const handleNumeroAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setNumero(e.target.value)
    )

    const[PontoRef, setPontoRef] = useState('')
    const handlePontoRefAdd = (e:ChangeEvent<HTMLTextAreaElement>)=>(
        setPontoRef(e.target.value)
    )

    const[Telefone, setTelefone] = useState('')
    const handleTelefoneAdd = (e:ChangeEvent<HTMLInputElement>)=>(
        setTelefone(e.target.value)
    )


    return(
        <div>
            <div>
                <Cabecalho/>
            </div>
            <div>
            <input 
                value={Img}
                type = 'image'
                placeholder="Adicione uma imagem do local"
                onChange={handleImgAdd}
                />

            <input 
                value={Nome}
                type = 'text'
                placeholder="Digite o Nome da entidade"
                onChange={handleNomeAdd}
                />
            <br/>
            <input 
                value={Cep}
                type = 'text'
                placeholder="Digite o cep"
                onChange={handleCepAdd}
                />
            <br/>
            <input 
                value={Logradouro}
                type = 'text'
                placeholder="Digite o logradouro"
                onChange={handleLogradouroAdd}
                />
            <br/>
            <input 
                value={Numero}
                type = 'text'
                placeholder="Digite o numero"
                onChange={handleNumeroAdd}
                 />
            <br/>
            <input 
                value={Complemento}
                type = 'text'
                placeholder="Digite o complemento"
                onChange={handleCompletoAdd}
                />
            <br/>
            <input 
                value={Bairro}
                type = 'text'
                placeholder="Digite o bairro"
                onChange={handleBairroAdd}
                />
            <br/>
            <input 
                value={Cidade}
                type = 'text'
                placeholder="Digite a cidade"
                onChange={handleCidadeAdd}
                />
            <br/>
            <input 
                value={Estado}
                type = 'text'
                placeholder="Digite o Estado"
                onChange={handleEstadoAdd}
                />
            <br/>
            <textarea 
                value={PontoRef}
                placeholder="Digite o ponto de referencia"
                onChange={handlePontoRefAdd}
                />
            <br/>
                 <label>Data inicio:</label>
            <input 
                value={DataInicio}
                type = 'date'
                onChange={handleDataInicioAdd}
                />
            <br/>
                 <label>Data Termino:</label>
            <input 
                value={DataTermino}
                type = 'date'
                onChange={handleDataTerminoAdd}
                />
            <br/>
            <textarea 
                value={Descricao}
                placeholder="Digite o Nome da entidade"
                onChange={handleDescricaoAdd}
                />
            <br/>
            <input 
                value={Telefone}
                type = 'text'
                placeholder="Digite o telefone"
                onChange={handleTelefoneAdd}
                />
            <br/>
            <input 
                value={Email}
                type = 'text'
                placeholder="Digite o Email"
                onChange={handleEmailAdd}
                />
            </div>
            <button onClick={handleAddClick}>Enviar</button>

        </div>
    );   
}

export default FormularioColeta;