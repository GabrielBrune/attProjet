import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../estilos/estilos.css'
import Cabecalho from '../cabecalho';

type Props = {
    onAdd: (
        Img: string,
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
        email: string) => void;

}


function FormularioColeta({ onAdd }: Props) {

    function handleAddClick() {
        if (Img && Nome && Cep && Logradouro && Numero
            && Complemento && Bairro && Cidade &&
            Estado && DataInicio && DataTermino &&
            Descricao && Telefone && Email) {

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
                Descricao,
                Telefone,
                Email);
        } else {
            alert('Preencha todos os campos!')
        }
    }

    const [Img, setImg] = useState('')
    const handleImgAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setImg(e.target.value)
    )

    const [Bairro, setBairro] = useState('')
    const handleBairroAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setBairro(e.target.value)
    )

    const [Cep, setCep] = useState('')
    const handleCepAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setCep(e.target.value)
    )

    const [Cidade, setCidade] = useState('')
    const handleCidadeAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setCidade(e.target.value)
    )

    const [Complemento, setComplento] = useState('')
    const handleCompletoAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setComplento(e.target.value)
    )

    const [DataInicio, setDataInicio] = useState('')
    const handleDataInicioAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setDataInicio(e.target.value)
    )

    const [DataTermino, setDataTermino] = useState('')
    const handleDataTerminoAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setDataTermino(e.target.value)
    )

    const [Descricao, setDescricao] = useState('')
    const handleDescricaoAdd = (e: ChangeEvent<HTMLTextAreaElement>) => (
        setDescricao(e.target.value)
    )

    const [Email, setEmail] = useState('')
    const handleEmailAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setEmail(e.target.value)
    )

    const [Estado, setEstado] = useState('')
    const handleEstadoAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setEstado(e.target.value)
    )

    const [Logradouro, setLogradouro] = useState('')
    const handleLogradouroAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setLogradouro(e.target.value)
    )

    const [Nome, setNome] = useState('')
    const handleNomeAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setNome(e.target.value)
    )

    const [Numero, setNumero] = useState('')
    const handleNumeroAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setNumero(e.target.value)
    )

    const [Telefone, setTelefone] = useState('')
    const handleTelefoneAdd = (e: ChangeEvent<HTMLInputElement>) => (
        setTelefone(e.target.value)
    )


    return (
        <div className='telaForm'>
            <div>
                <div>
                    <Cabecalho />
                </div>
                <div>
                    <div className='box-conteiner-form'>
                        <div className='top'>
                            <h2>Insira as Informações</h2>
                        </div>
                        <div className='box-input'>
                            <input className='cssForm'
                                value={Img}
                                type='text'
                                placeholder="Digite a URL da entidade"
                                onChange={handleImgAdd}
                            />
                            <input className='cssForm'
                                value={Nome}
                                type='text'
                                placeholder="Digite o nome da entidade"
                                onChange={handleNomeAdd}
                            />
                            <br />
                            <input className='cssForm'
                                value={Cep}
                                type='text'
                                placeholder="Digite o CEP"
                                onChange={handleCepAdd}
                            />
                            <br />
                            <input className='cssForm'
                                value={Logradouro}
                                type='text'
                                placeholder="Digite o logradouro"
                                onChange={handleLogradouroAdd}
                            />
                            <br />
                            <input className='cssForm'
                                value={Numero}
                                type='text'
                                placeholder="Digite o número"
                                onChange={handleNumeroAdd}
                            />
                            <br />
                            <input className='cssForm'
                                value={Complemento}
                                type='text'
                                placeholder="Digite o complemento"
                                onChange={handleCompletoAdd}
                            />

                            <br />
                            <input className='cssForm'
                                value={Bairro}
                                type='text'
                                placeholder="Digite o bairro"
                                onChange={handleBairroAdd}
                            />

                            <br />
                            <input className='cssForm'
                                value={Cidade}
                                type='text'
                                placeholder="Digite a cidade"
                                onChange={handleCidadeAdd}
                            />

                            <br />
                            <input className='cssForm'
                                value={Estado}
                                type='text'
                                placeholder="Digite o estado"
                                onChange={handleEstadoAdd}
                            />

                            <br />
                            <input className='cssForm'
                                value={Telefone}
                                type='text'
                                placeholder="Digite o telefone"
                                onChange={handleTelefoneAdd}
                            />

                            <br />
                            <input className='cssForm'
                                value={Email}
                                type='text'
                                placeholder="Digite o email"
                                onChange={handleEmailAdd}
                            />

                            <br />
                            <input className='cssForm'
                                placeholder='Data de início'
                                value={DataInicio}
                                type='text'
                                onChange={handleDataInicioAdd}
                            />

                            <br />
                            <input className='cssForm'
                                placeholder='Data de término'
                                value={DataTermino}
                                type='text'
                                onChange={handleDataTerminoAdd}
                            />

                            <br />
                            <textarea className='cssForm1'
                                value={Descricao}
                                placeholder="Digite a descrição"
                                onChange={handleDescricaoAdd}
                            />
                            <br />

                            <button className='buttonEnter1' onClick={handleAddClick}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormularioColeta;