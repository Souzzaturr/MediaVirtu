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
    <section class="bloco">
        <div class="autor">
            <img src="${ foto_perfil_autor }" alt="" class="foto-perfil">
            <div class="info-autor">
                <h3 class="nome-autor goldman-bold">${ nome_autor }</h3>
                <p class="tempo-post">${ tempo_postagem }</p>
            </div>
        </div>
        ${ texto }
        ${ imgs }
    </section>
    `
}