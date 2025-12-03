import opcoes_barras_laterais from "../data/opcoes_laterais.json" assert { type: "json"};


function barraEsquerda () {
    let opcao, endereco;
    const indices = [0, 1, 2, 3, 4];
    var menu_esquerdo = `<section id = "barra-esquerda" class = "bg-blbl rgb-border-fade">`

    indices.forEach((indice) => {
        opcao = opcoes_barras_laterais["sidebar_left"]["opcoes"][indice];
        endereco = opcoes_barras_laterais["sidebar_left"]["enderecos_icones"][indice];

        menu_esquerdo += `
        <a id = "${ opcao }" class = "opcao-barra-lateral" href="" data-page = "${ opcao }">
            <h3 class = "texto-opc-lateral goldman-bold">${ opcao }</h3>

            <img class = "icon-barra-ltrl" src="${ endereco }" alt="" width = "100%">                    
        </a>
        `
    });

    menu_esquerdo += "</section>";

    return menu_esquerdo
}



function barraDireita () {
    let opcao, endereco;
    const indice = [0, 1, 2, 3, 4];
    var menu_direito = `<section id = "barra-direita" class = "bg-blbl rgb-border-fade">`;

    indice.forEach( (indice) => {
        opcao = opcoes_barras_laterais["sidebar_right"]["opcoes"][indice];
        endereco =  opcoes_barras_laterais["sidebar_right"]["enderecos_icones"][indice];

        menu_direito += `
        <a id = "${ opcao }" class = "opcao-barra-lateral" href = "" data-page = "${ opcao }">
            <img class = "icon-barra-ltrl" src = "${ endereco }" alt = "" width = "100%">

            <h3 class = "texto-opc-lateral goldman-bold">${ opcao }</h3>
        </a>`
    });

    menu_direito += "</section>";

    return menu_direito;
}



export default function barrasNavegacaoLateral () {
    return (
    `<nav id = "barras-navegacao-laterais">` +
        barraEsquerda() + 
        barraDireita() +
    `</nav>`
    )
}