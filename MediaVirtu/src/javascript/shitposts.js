import tresPontinhos from "./tresPontinhos.js";

export default function shitpost (nome_autor, foto_perfil_autor, tempo_postagem, conteudo_texto, lista_imagens = []) {

    const texto = conteudo_texto.length > 0 ?
    `<div class = "conteudo-shitpost">
        ${ conteudo_texto.split('\n').map(( linha ) => `<p>${ linha }</p>`).join('') }
    </div>`
    : '';

    const imgs = lista_imagens.length > 0 ?
    `<div class = "conjunto-imagens-shitpost">
        ${ lista_imagens.map(( endereco ) => `<img class = "imagem-shitpost" src = "${ endereco }" alt = "imagem-shitpost">`).join('') }
    </div>`
    : '';

    return `
    <section class="bloco bloco-shitpost">
        <div class = "topo-shitpost">
            <div class="autor">
                <img src="${ foto_perfil_autor }" alt="" class="foto-perfil">
                <div class="info-autor">
                    <h3 class="nome-autor goldman-bold">${ nome_autor }</h3>
                    <p class="tempo-post">${ tempo_postagem }</p>
                </div>
            </div>
            ${ tresPontinhos() }
        </div>
        <div class = "principal-shitpost">
            ${ texto }
            ${ imgs }
        </div>
        <div class = "painel-interacao-shitpost">
            ${ gostei(nome_autor) }
            ${ naoGostei(nome_autor) }
            ${ comentarios(nome_autor) }
        </div>
    </section>
    `
}



function gostei (autor = "ninguem") {
    let num = 0;

    return `
        <a class = "botao-gostei" href = "">
            <img class = "icone-gostei" src = "icones/interacao_shitpost_icons/icone-gostei.png" alt = "gostei">
            <p id = "gostei-shitpost-${ autor }">${ num }</p>
        </a>
    `
}



function naoGostei (autor = "ninguem") {
    let num = 0;

    return `
        <a class = "botao-naogostei" href = "">
            <img class = "icone-naogostei" src = "icones/interacao_shitpost_icons/icone-naogostei.png" alt = "nao-gostei">
            <p id = "naogostei-shitpost-${ autor }">${ num }</p>
        </a>
    `
}



function comentarios (autor = "ninguem") {
    let num = 0;

    return `
        <a class = "botao-comentarios" href = "">
            <img class = "icone-comentarios" src = "icones/interacao_shitpost_icons/icone-comentarios.png" alt = "nao-gostei">
            <p id = "qtd-comentarios-shitpost-${ autor }">${ num }</p>
        </a>
    `
}