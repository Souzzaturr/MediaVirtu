import { SYSTEM_CONFIG } from "@/src/globals/config";


export default function Cabecalho () {
    return <>
        <header id = "cabecalho">
            <div id = "cabecalho-cima" className = "rgb-border-fade"></div>
            <div id = "cabecalho-meio" className = "rgb-border-fade"></div>
            <a id = "titulo" href = "/">
                <h1 className = "goldman-bold">{ SYSTEM_CONFIG.name }</h1>
            </a>
        </header>
        </>
}