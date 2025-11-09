
import { BarraNavegacaoDireita } from "@/src/components/barrasNavegacaoLateral/barrasNavegacao/BarraNavegacaoDireita";
import { BarraNavegacaoEsquerda } from "@/src/components/barrasNavegacaoLateral/barrasNavegacao/BarraNavegacaoEsquerda";


export function BarrasNavegacaoLateral () {
    return <>

        <nav id = "barras-navegacao-laterais" >

            <BarraNavegacaoEsquerda/>
            
            <BarraNavegacaoDireita/>

        </nav>

    </>
}