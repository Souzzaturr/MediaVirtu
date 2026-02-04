
import Link from "next/link";

import { BotaoSair } from "@/src/components/barrasNavegacaoLateral/botoesBarraNavegacaoLateral/BotaoSair";


export function BarraNavegacaoDireita () {
    return <>
        <section id = "barra-direita" className = "bg-blbl rgb-border-fade" >

            <Link id = "" className = "opcao-barra-lateral" href = "/Perfis" data-page = "" >

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-perfil.png" alt = "" width = "100%" />

                <h3 className = "texto-opc-lateral goldman-bold" >Meu Perfil</h3>

            </Link>

            <Link id = "" className = "opcao-barra-lateral" href = "/Postar" data-page = "" >

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-postar.png" alt = "" width = "100%" />

                <h3 className = "texto-opc-lateral goldman-bold" >Postar</h3>

            </Link>

            <Link id = "" className = "opcao-barra-lateral" href = "/Excluir" data-page = "" >

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-excluir.svg" alt = "" width = "100%" />

                <h3 className = "texto-opc-lateral goldman-bold" >Excluir</h3>

            </Link>

            <Link id = "" className = "opcao-barra-lateral" href = "/Denunciar" data-page = "" >

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-denunciar.png" alt = "" width = "100%" />

                <h3 className = "texto-opc-lateral goldman-bold" >Denunciar</h3>

            </Link>

            <BotaoSair opcao = { "Sair" } imagem = { "/icones/menu_lateral_icons/icone-sair.png" } />

        </section>
    </>
}