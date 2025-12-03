import opcoes_barras_laterais from "../data/opcoes_laterais.json" assert { type: "json"};
import Link from "next/link";


function BarraEsquerda () {
    const {opcoes, enderecos_icones} = opcoes_barras_laterais.sidebar_left;

    return <>
        <section id = "barra-esquerda" className = "bg-blbl rgb-border-fade">
            { opcoes.map((opcao, indice) => (
                <Link key = {indice} id = {opcao} className = "opcao-barra-lateral" href = { "/" + (opcao != "Inicio" ? opcao : "") } data-page = {opcao}>
                    <h3 className = "texto-opc-lateral goldman-bold">{ opcao }</h3>

                    <img className = "icon-barra-ltrl" src = {enderecos_icones[indice]} alt = "" width = "100%"/>
                </Link>
            ))}
        </section>
    </>
}


function BarraDireita () {
    const {opcoes, enderecos_icones} = opcoes_barras_laterais.sidebar_right;

    return <>
        <section id = "barra-direita" className = "bg-blbl rgb-border-fade">
            { opcoes.map((opcao, indice) => (
                <Link key = {indice} id = {opcao} className = "opcao-barra-lateral" href = { "/" + (opcao != "Inicio" ? opcao : "" )} data-page = {opcao}>
                    <img className = "icon-barra-ltrl" src = {enderecos_icones[indice]} alt = "" width = "100%"/>

                    <h3 className = "texto-opc-lateral goldman-bold">{ opcao }</h3>

                </Link>
            ))}
        </section>
    </>
}



export default function BarrasNavegacaoLateral () {
    return <>
    <nav id = "barras-navegacao-laterais">
        <BarraEsquerda/>
        <BarraDireita/>
    </nav>
    </>
}