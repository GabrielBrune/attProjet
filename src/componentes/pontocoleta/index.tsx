import '../../estilos/estilos.css'
import { useState } from 'react'

type Props = {
    dados: {
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
        pontoRef: string,
        descricao: string,
        telefone: string,
        email: string
    },
    chave: number
}

function PontoColeta({ dados }: Props, chave: number) {
    const [Show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }

    return (
        <div>
            {Show && (
                <div key={chave}>
                    <div>
                        {dados.nome}
                    </div>
                    <div>
                        {dados.dataInicio}
                    </div>
                    <div>
                        {dados.dataTermino}
                    </div>
                    <button onClick={handleShow}>
                        <div>Saiba Mais</div>
                    </button>
                </div>
            )}
            {!Show && (
                <div key={chave}>
                    <div>{dados.img}</div>
                    <div>{dados.nome}</div>  
                    <div>{dados.cep}</div>
                    <div>{dados.logradouro}</div>  
                    <div>{dados.numero}</div>
                    <div>{dados.complemento}</div>  
                    <div>{dados.bairro}</div>
                    <div>{dados.cidade}</div>  
                    <div>{dados.estado}</div>
                    <div>{dados.dataInicio}</div>  
                    <div>{dados.dataTermino}</div>
                    <div>{dados.pontoRef}</div>  
                    <div>{dados.descricao}</div>
                    <div>{dados.telefone}</div>  
                    <div>{dados.email}</div>



                </div>
            )}

        </div>
    )
}

export default PontoColeta;