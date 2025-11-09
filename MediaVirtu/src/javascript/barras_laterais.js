import opcoes_barras_laterais from "../data/opcoes_laterais.json" assert { type: "json"};

function menu_esquerdo () {
    const indices = [0, 1, 2, 3, 4];
    var menu_esquerdo = `<section id = "menu-left" class = "bg-blbl rgb-border-fade">`

    indices.forEach((indice) => {
        menu_esquerdo += `
        <a class = "opcao-lateral" href="">
            <h3 class = "texto-opc-lateral goldman-bold">${ opcoes_barras_laterais["sidebar_left"].opcoes[indice] }</h3>

            <img class = "icon-menu-ltrl" src="${ opcoes_barras_laterais["sidebar_left"]["enderecos_icones"][indice] }" alt="" width = "100%">                    
        </a>
        `
    });

    menu_esquerdo += "</section>";

    return menu_esquerdo
}

function menu_direito () {
    const indice = [0, 1, 2, 3, 4];
    var menu_direito = `<section id = "menu-right" class = "bg-blbl rgb-border-fade">`;

    indice.forEach( (indice) => {
        menu_direito += `
        <a class = "opcao-lateral" href = "">
            <img class = "icon-menu-ltrl" src = "${ opcoes_barras_laterais["sidebar_right"]["enderecos_icones"][indice] }" alt = "" width = "100%">

            <h3 class = "texto-opc-lateral goldman-bold">${ opcoes_barras_laterais["sidebar_right"]["opcoes"][indice] }</h3>
        </a>`
    });

    menu_direito += "</section>";

    return menu_direito;
}

export default function menus () {
    return (
    `<nav id = "menus">` +
        menu_esquerdo() + 
        menu_direito() +
    `</nav>`
    )
}