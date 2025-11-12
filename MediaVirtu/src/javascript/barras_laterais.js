import opcoes_barras_laterais from "../data/opcoes_laterais.json" assert { type: "json"};


function menu_esquerdo () {
    let opcao, endereco;
    const indices = [0, 1, 2, 3, 4];
    var menu_esquerdo = `<section id = "menu-left" class = "bg-blbl rgb-border-fade">`

    indices.forEach((indice) => {
        opcao = opcoes_barras_laterais["sidebar_left"]["opcoes"][indice];
        endereco = opcoes_barras_laterais["sidebar_left"]["enderecos_icones"][indice];

        menu_esquerdo += `
        <a id = "${ opcao }" class = "opcao-lateral" href="" data-page = "${ opcao }">
            <h3 class = "texto-opc-lateral goldman-bold">${ opcao }</h3>

            <img class = "icon-menu-ltrl" src="${ endereco }" alt="" width = "100%">                    
        </a>
        `
    });

    menu_esquerdo += "</section>";

    return menu_esquerdo
}



function menu_direito () {
    let opcao, endereco;
    const indice = [0, 1, 2, 3, 4];
    var menu_direito = `<section id = "menu-right" class = "bg-blbl rgb-border-fade">`;

    indice.forEach( (indice) => {
        opcao = opcoes_barras_laterais["sidebar_right"]["opcoes"][indice];
        endereco =  opcoes_barras_laterais["sidebar_right"]["enderecos_icones"][indice];

        menu_direito += `
        <a id = "${ opcao }" class = "opcao-lateral" href = "" data-page = "${ opcao }">
            <img class = "icon-menu-ltrl" src = "${ endereco }" alt = "" width = "100%">

            <h3 class = "texto-opc-lateral goldman-bold">${ opcao }</h3>
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