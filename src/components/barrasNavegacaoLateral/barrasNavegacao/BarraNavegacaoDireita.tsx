
import Link from "next/link";

import { BotaoSair } from "@/src/components/barrasNavegacaoLateral/botoesBarraNavegacaoLateral/BotaoSair";
import { BotaoPostar } from "@/src/components/barrasNavegacaoLateral/botoesBarraNavegacaoLateral/BotaoPostar";
import BotaoPerfil from "@/src/components/barrasNavegacaoLateral/botoesBarraNavegacaoLateral/BotaoPerfil";
import BotaoMensagens from "@/src/components/barrasNavegacaoLateral/botoesBarraNavegacaoLateral/BotaoMensagens";
import BotaoExcluir from "@/src/components/barrasNavegacaoLateral/botoesBarraNavegacaoLateral/BotaoExcluir";


export function BarraNavegacaoDireita () {
    const classe = "rgb-border-fade bg-black text-white ";

    return <>
        <section id = "barra-direita" className = {classe} >
            <button className = "botao-expandir-barra-lateral rgb-border-fade bg-black"  >{"<"}</button>

            <BotaoPerfil />

            <BotaoPostar opcao = {"Postar"} imagem = {"/icones/menu_lateral_icons/icone-postar.png" } />

            <BotaoMensagens />

            <BotaoExcluir />

            <BotaoSair opcao = { "Sair" } imagem = { "/icones/menu_lateral_icons/icone-sair.png" } />

        </section>
    </>
}