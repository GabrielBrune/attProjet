

export const api={
    listPointName: async (nome:string) =>{
        let response = await fetch('http://localhost:3010/pontos/'+nome);
        
        let json = await response.json();
        return json;
    },

    renderHome: async () =>{
        let response = await fetch('http://localhost:3010/pontos');
        
        let json = await response.json();
        return json;
    },


    listPointID: async () =>{
        let response = await fetch('http://localhost:3010/pontos/detalhamento/');
        
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

        let response = await fetch('http://localhost:3010/pontos/formulariocoleta',{
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
        let response = await fetch('http://localhost:3010/pontos'+id, {method:'PUT'});
        
        let json = await response.json();
        return json;
    },

    removePoint: async (id:string) =>{
        let response = await fetch('http://localhost:3000/pontos'+id, {method:'DELETE'});
        
        let json = await response.json();
        return json;
    },
    
    logadm:async () =>{
        let response = await fetch('http://localhost:3000/amd');

        let json = await response.json();
        return json
    } 
}