type Props={
    dados:{
        nome:string, cep:string, logradouro:string,
        numero:string, complemento:string, bairro:string,cidade:string, estado:string, 
        dataInicio:string,dataTermino:string, pontoRef:string, descricao:string,
        telefone:string, email:string
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