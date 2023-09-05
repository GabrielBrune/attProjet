

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
        descricao:string,
        telefone:string, 
        email:string) =>{

        let response = await fetch('http://localhost:3010/pontos/formcoleta',{
                                    method:'POST',
                                    body:JSON.stringify
                                    ({
                                        IMG: img,
                                        DATA_INICIO: dataInicio,
                                        DATA_TERMINO: dataTermino,
                                        DESCRICAO: descricao,
                                         ENTIDADES:{NOME: nome,
                                                     LOGRADOURO: logradouro,
                                                     CEP: cep,
                                                     NUMERO: numero,
                                                     COMPLEMENTO: complemento,
                                                     BAIRRO: bairro,
                                                     CIDADE: cidade,
                                                     ESTADO: estado,
                                                     TELEFONE: telefone,
                                                     EMAIL: email,
                                        }
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
        let Response = await fetch('http://localhost:3010/pontos/')
        let response = Response = await fetch('http://localhost:3010/pontos/'+id, {method:'DELETE'});
        
        let json = await response.json();
        return json;
    },
    
    logadm:async (username:string, password:string) =>{
        {
            let response = await fetch('http://localhost:3010/auth/login',
            {
                method:'POST',
                body:JSON.stringify
                ({
                    username,
                    password
                }),
                headers:{
                    'Content-Type':'application/json; charset=utf-8'
                }
            });

            let json = await response.json();
            return json
        } 
    }
}