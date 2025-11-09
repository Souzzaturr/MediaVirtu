
import Link from "next/link";


export function BarraNavegacaoEsquerda () {
    return <>
        <section id = "barra-esquerda" className = "bg-blbl rgb-border-fade" >

            <Link id = "" className = "opcao-barra-lateral" href = "/" data-page = "" >

                <h3 className = "texto-opc-lateral goldman-bold" >Início</h3>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-inicio.png" alt="" width = "100%" />

            </Link>

            <Link id = "" className = "opcao-barra-lateral" href = "/Sobre" data-page = "" >

                <h3 className = "texto-opc-lateral goldman-bold" >Sobre</h3>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-sobre.png" alt="" width = "100%" />

            </Link>

            <Link id = "" className = "opcao-barra-lateral" href = "/Ajuda" data-page = "" >

                <h3 className = "texto-opc-lateral goldman-bold" >Ajuda</h3>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-ajuda.png" alt="" width = "100%" />

            </Link>

            <Link id = "" className = "opcao-barra-lateral" href = "/Feedback" data-page = "" >

                <h3 className = "texto-opc-lateral goldman-bold" >Feedback</h3>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-feedback.png" alt="" width = "100%" />

            </Link>

            <Link id = "" className = "opcao-barra-lateral" href = "/Configuracoes" data-page = "" >

                <h3 className = "texto-opc-lateral goldman-bold" >Configurações</h3>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-configuracoes.svg" alt="" width = "100%" />

            </Link>

        </section>
    </>
}