
import Link from "next/link";

import { BotaoSair } from "@/src/components/barrasNavegacaoLateral/botoesBarraNavegacaoLateral/BotaoSair";
import { BotaoPostar } from "@/src/components/barrasNavegacaoLateral/botoesBarraNavegacaoLateral/BotaoPostar";


export function BarraNavegacaoDireita () {
    const classe = "rgb-border-fade bg-black text-white ";

    return <>
        <section id = "barra-direita" className = {classe} >
            <button className = "botao-expandir-barra-lateral rgb-border-fade bg-black"  >{"<"}</button>

            <Link id = "" className = "opcao-barra-lateral" href = "/perfis" data-page = "" >
                <div className="hover-opcao-color"></div>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-perfil.png" alt = "" width = "100%" />

                <h3 className = "texto-opc-lateral goldman-bold" >Meu Perfil</h3>

            </Link>

            <BotaoPostar opcao = {"Postar"} imagem = {"/icones/menu_lateral_icons/icone-postar.png" } />

            <Link id = "" className = "opcao-barra-lateral" href = "/user/mensagens" data-page = "" >
                <div className="hover-opcao-color"></div>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-mensagens.png" alt = "" width = "100%" />

                <h3 className = "texto-opc-lateral goldman-bold" >Mensagens</h3>

            </Link>

            <Link id = "" className = "opcao-barra-lateral" href = "/Excluir" data-page = "" >
                <div className="hover-opcao-color"></div>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-excluir.svg" alt = "" width = "100%" />

                <h3 className = "texto-opc-lateral goldman-bold" >Excluir</h3>

            </Link>

            <BotaoSair opcao = { "Sair" } imagem = { "/icones/menu_lateral_icons/icone-sair.png" } />

        </section>
    </>
}