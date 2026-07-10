import Link from "next/link";


export function BarraNavegacaoEsquerda () {
    const classe = "rgb-border-fade bg-black text-white ";

    return <>
        <section id = "barra-esquerda" className = {classe} >
            <button className = "botao-expandir-barra-lateral rgb-border-fade bg-black" >{">"}</button>

            <a id = "" className = "opcao-barra-lateral" href = "/" data-page = "" >
                <div className="hover-opcao-color"></div>

                <h3 className = "texto-opc-lateral goldman-bold" >Início</h3>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-inicio.png" alt="" width = "100%" />

            </a>

            <Link id = "" className = "opcao-barra-lateral" href = "/Sobre" data-page = "" >
                <div className="hover-opcao-color"></div>

                <h3 className = "texto-opc-lateral goldman-bold" >Sobre</h3>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-sobre.png" alt="" width = "100%" />

            </Link>

            <Link id = "" className = "opcao-barra-lateral" href = "/Novidades" data-page = "" >
                <div className="hover-opcao-color"></div>

                <h3 className = "texto-opc-lateral goldman-bold" >Novidades</h3>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-novidades.png" alt="" width = "100%" />

            </Link>

            <Link id = "" className = "opcao-barra-lateral" href = "/Ajuda" data-page = "" >
                <div className="hover-opcao-color"></div>

                <h3 className = "texto-opc-lateral goldman-bold" >Ajuda</h3>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-ajuda.png" alt="" width = "100%" />

            </Link>

            <Link id = "" className = "opcao-barra-lateral" href = "/Configuracoes" data-page = "" >
                <div className="hover-opcao-color"></div>

                <h3 className = "texto-opc-lateral goldman-bold" >Configurações</h3>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-configuracoes.svg" alt="" width = "100%" />

            </Link>

        </section>
    </>
}