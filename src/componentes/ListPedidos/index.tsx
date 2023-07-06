type Props={
    dados:{
        nome:string, cep:BigInteger, logradouro:string,
        numero:BigInteger, complemento:string, bairro:string,cidade:string, estado:string, 
        dataInicio:BigInteger,dataTermino:BigInteger, pontoRef:string, descricao:string,
        telefone:BigInteger, email:string
    }
}


function ListPedidos({dados}:Props){
    
    
    return(
        <div>
            <div>
            {dados.nome}{dados.cep}
                {dados.logradouro}{dados.numero}
                {dados.complemento}{dados.bairro}
                {dados.cidade}{dados.estado}
                {dados.dataInicio}{dados.dataTermino}
                {dados.pontoRef}{dados.descricao}
                {dados.telefone}{dados.email}
            </div>
        
        </div>
    )
}

export default ListPedidos;