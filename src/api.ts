

export const api={
    listPointName: async (nome:string) =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/'+nome);
        
        let json = await response.json();
        return json;
    },

    listPointID: async (id:string) =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/'+id);
        
        let json = await response.json();
        return json;
    },
    
    addPoint: async(
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
        email:string) =>{

        let response = await fetch('https://jsonplaceholder.typicode.com/todos/',{
                                    method:'POST',
                                    body:JSON.stringify
                                    ({
                                        img: img,
                                        nome: nome, 
                                        cep: cep, 
                                        logradouro: logradouro, 
                                        numero: numero,
                                        complemento: complemento, 
                                        bairro: bairro,
                                        cidade: cidade, 
                                        estado: estado,
                                        dataInicio: dataInicio, 
                                        dataTermino: dataTermino,
                                        pontoRef: pontoRef, 
                                        descricao: descricao,
                                        telefone: telefone, 
                                        email: email
                                }),
                            headers:{'Content-Type': 'application/json'}});
            let json = await response.json();
        return json;
    },

    modPoint: async (id:string) =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/'+id, {method:'PUT'});
        
        let json = await response.json();
        return json;
    },

    removePoint: async (id:string) =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/'+id, {method:'DELETE'});
        
        let json = await response.json();
        return json;
    },
    
    
}