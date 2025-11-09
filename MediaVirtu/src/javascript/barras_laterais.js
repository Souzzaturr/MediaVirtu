function menu_esquerdo () {
    return (
    `<section id="menu-left" class = "bg-blbl rgb-border-fade">
        <a class = "opcao-lateral" href="">
            <h3 class = "texto-opc-lateral goldman-bold">Inicio</h3>
            <img class = "icon-menu-ltrl" src="public/icones/menu_lateral_icons/icone-inicio.png" alt="" width = "100%">                    
        </a>
        <a class = "opcao-lateral" href="">
            <h3 class = "texto-opc-lateral goldman-bold">Sobre</h3>
            <img class = "icon-menu-ltrl" src="public/icones/menu_lateral_icons/icone-sobre.png" alt="" width = "100%">                    
        </a>
        <a class = "opcao-lateral" href="">
            <h3 class = "texto-opc-lateral goldman-bold">Ajuda</h3>
            <img class = "icon-menu-ltrl" src="public/icones/menu_lateral_icons/icone-ajuda.png" alt="" width = "100%">                    
        </a>
        <a class = "opcao-lateral" href="">
            <h3 class = "texto-opc-lateral goldman-bold">Feedback</h3>
            <img class = "icon-menu-ltrl" src="public/icones/menu_lateral_icons/icone-feedback.png" alt="" width = "100%">                    
        </a>
        <a class = "opcao-lateral" href="">
            <h3 class = "texto-opc-lateral goldman-bold">Configurações</h3>
            <img class = "icon-menu-ltrl" src="public/icones/menu_lateral_icons/icone-configuracoes.svg" alt="" width = "100%">                    
        </a>
    </section>`
    )
}

function menu_direito () {
    return (
    `<section id="menu-right" class = "bg-blbl rgb-border-fade">
        <a class = "opcao-lateral" href="">
            <img class = "icon-menu-ltrl" src="public/icones/menu_lateral_icons/icone-perfil.png" alt="" width = "100%">                    
            <h3 class = "texto-opc-lateral goldman-bold">Meu Perfil</h3>
        </a>
        <a class = "opcao-lateral" href="">
            <img class = "icon-menu-ltrl" src="public/icones/menu_lateral_icons/icone-postar.png" alt="" width = "100%">                    
            <h3 class = "texto-opc-lateral goldman-bold">Postar</h3>
        </a>
        <a class = "opcao-lateral" href="">
            <img class = "icon-menu-ltrl" src="public/icones/menu_lateral_icons/icone-excluir.svg" alt="" width = "100%">                    
            <h3 class = "texto-opc-lateral goldman-bold">Excluir</h3>
        </a>
        <a class = "opcao-lateral" href="">
            <img class = "icon-menu-ltrl" src="public/icones/menu_lateral_icons/icone-denunciar.png" alt="" width = "100%">                    
            <h3 class = "texto-opc-lateral goldman-bold">Denunciar</h3>
        </a>
        <a class = "opcao-lateral" href="">
            <img class = "icon-menu-ltrl" src="public/icones/menu_lateral_icons/icone-sair.png" alt="" width = "100%">                    
            <h3 class = "texto-opc-lateral goldman-bold">Sair</h3>
        </a>
    </section>`
    )
}

export default function menus () {
    return (
    `<nav id = "menus">` +
        menu_esquerdo() + 
        menu_direito() +
    `</nav>`
    )
}