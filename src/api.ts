

export const api={
    lisPointName: async (nome:string) =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/'+nome);
        
        let json = await response.json();
        return json;
    },

    listPointID: async (id:string) =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/'+id);
        
        let json = await response.json();
        return json;
    },
    
    addPoint: async(nome:string, cep:BigInteger, logradouro:string,
        numero:BigInteger, complemento:string, bairro:string,cidade:string, estado:string, 
        dataInicio:BigInteger,dataTermino:BigInteger, pontoRef:string, descricao:string,
        telefone:BigInteger, email:string) =>{

        let response = await fetch('https://jsonplaceholder.typicode.com/todos/',{
                                    method:'POST',
                                    body:JSON.stringify
                                    ({nome: nome, cep: cep, 
                                    logradouro: logradouro, numero: numero,
                                    complemento: complemento, bairro: bairro,
                                    cidade: cidade, estado: estado,
                                    dataInicio: dataInicio, dataTermino: dataTermino,
                                    pontoRef: pontoRef, descricao: descricao,
                                    telefone: telefone, email: email}),
                            headers:{'Content-Type': 'application/json'}});
            let json = await response.json();
        return json;
    },

    modPoint: async (id:string) =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/'+id);
        
        let json = await response.json();
        return json;
    },

    removePoint: async (id:string) =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/'+id);
        
        let json = await response.json();
        return json;
    },
    
    
}