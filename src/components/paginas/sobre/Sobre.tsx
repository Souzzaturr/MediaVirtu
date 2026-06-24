import adms_supremos from "./adms_supremos.json";
import CardAdmSupremo from "./CardAdmSupremo";

export default function Sobre () {
    return <>
    <section className = "bloco bloco-sobre">
        <h2 className = "titulo-sobre goldman-bold"> Sobre o MediaVirtu </h2>

        <div className = "texto-sobre">
            { texto(texto_apresentacao) }
        </div>
        
        <h3 className = "goldman-bold">Desenvolvedores:</h3>

        <div className = "cards-adms-supremos">
            { adms_supremos.map((adm) => <CardAdmSupremo key = { adm.nome } adm = { adm }/>) }
        </div> 

        <h3 className = "goldman-bold">Mais sobre o site:</h3>

        <div className = "texto-sobre">
            { texto(mais_sobre_site) }
        </div>

        <h4 className = "goldman-regular">©MediaVirtu Todos os Direitos Reservados</h4>
    </section>
    </>
}


function texto (texto: string) {
    return texto ? texto.split('\n').map((linha) => <p>{ linha }</p>) : '';
}


const texto_apresentacao = `MediaVirtu é uma rede social de shitposts, onde o foco principal são os posts de merda de nossos queridos usuários. Navegue por este belíssimo site, descubra os mais incríveis shitposts que você pode encontrar, enjoy!!!`

const mais_sobre_site = `Este site é um projeto feito para a disciplina de Programação para Web II, do curso de Engenharia de Software, IFPB. Neste site, foi implementado na prática a combinação de HTML, CSS & JavaScript para a construção de uma aplicação web dinâmica, explorando todas as propriedades da árvore DOM, manipulando eventos, armazenamento local no navegador, e o uso de componentes para o reaproveitamento de código.`