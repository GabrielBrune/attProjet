

export const api={
    listPointName: async (nome:string) =>{
        let response = await fetch('http://localhost:3000/'+nome);
        
        let json = await response.json();
        return json;
    },

    listPointID: async (id:string) =>{
        let response = await fetch('http://localhost:3000/'+id);
        
        let json = await response.json();
        return json;
    },
    
    addPoint: async(

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
        descricao:string,
        telefone:string, 
        email:string) =>{

        let response = await fetch('http://localhost:3000/',{
                                    method:'POST',
                                    body:JSON.stringify
                                    ({
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
                                        descricao: descricao,
                                        telefone: telefone, 
                                        email: email
                                }),
                            headers:{'Content-Type': 'application/json'}});
            let json = await response.json();
        return json;
    },

    modPoint: async (id:string) =>{
        let response = await fetch('http://localhost:3000/'+id, {method:'PUT'});
        
        let json = await response.json();
        return json;
    },

    removePoint: async (id:string) =>{
        let response = await fetch('http://localhost:3000/'+id, {method:'DELETE'});
        
        let json = await response.json();
        return json;
    },
    
    
}