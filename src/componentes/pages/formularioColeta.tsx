import { useState } from "react";
import { api } from "../../api";
import FormularioColeta from "../FormColeta";
import { Pontos } from '../types/pontos';


function TelaForm(){
    const[Pontos, setPontos] = useState<Pontos[]>([])

    const handleInserir = async ( nome:string, cep:string, logradouro:string,
        numero:string, complemento:string, bairro:string,cidade:string, estado:string, 
        dataInicio:string,dataTermino:string, pontoRef:string, descricao:string,
        telefone:string, email:string) =>{
        
        let json = await api.addPoint(
            nome,cep,logradouro,numero,
            complemento,bairro,cidade,estado,
            dataInicio,dataTermino,pontoRef,
            descricao,telefone,email);
        
            if(json.id){
                alert('Post Adicionado com sucesso!')
                    setPontos((Pontos) => [...Pontos, json]);
             }else{
                 alert('Ocorreu alguma falha no post do ponto!')
             }
    }

    return(
    <div>
        <div>
            <FormularioColeta onAdd={handleInserir}/>
        </div>

    </div>
);
}

export default TelaForm;