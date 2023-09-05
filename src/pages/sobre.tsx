import Cabecalho from "../componentes/cabecalho";


function Sobre() {
    return (
        <div>
            <Cabecalho/>
                <div className='background-sobre'>
                    <div className='box-conteiner-sobre'>
                        <div>              
                                <div className='sobre'>
                                    <br></br>
                                    <br></br>
                                    <h2>Esta plataforma faz parte do Projeto Integrador do curso de Desenvolvimento Full-stack da Instituição de Ensino Senac Bauru, que foi pensado e desenvolvido analisando o impacto social positivo que ele causaria, ajudando pessoas que necessitam de ajuda com vestimentas, roupas, sapatos e doações durante os períodos mais frios do ano. Desta forma, a sociedade podendo colaborar tanto com doações, como quem precisa estar recebendo essas doações estar indo coletar o que necessitam nos pontos cadastrados dentro da nossa plataforma.</h2>
                                </div>
                        </div>    
                    </div>
                </div>
        </div>
    )
}

export default Sobre;