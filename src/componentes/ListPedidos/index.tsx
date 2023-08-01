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


function ListPedidos({ dados }: Props, chave: number) {


    return (
        <div key={chave}>
            <div className="teste">
                {dados.img}<br />
                {dados.nome}<br />{dados.cep}<br />
                {dados.logradouro}<br />{dados.numero}<br />
                {dados.complemento}<br />{dados.bairro}<br />
                {dados.cidade}<br />{dados.estado}<br />
                {dados.dataInicio}<br />{dados.dataTermino}<br />
                {dados.pontoRef}<br />{dados.descricao}<br />
                {dados.telefone}<br />{dados.email}<br />
            </div>

        </div>
    )
}

export default ListPedidos;