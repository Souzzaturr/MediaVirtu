export default function shitpost () {
    const nome_autor = "Fulano da Silva";
    const tempo_postagem = "Ontem";
    const endereco_foto_perfil_autor = "public/icones/MediaVirtu_icons/MediaVirtu_icon.png";
    const endereco_imagem = "public/pictures/thomas_termonuke.png";
    const conteudo_texto_shitpost = `
            <p>Rosas são vermelhas</p>
            <p>Sua cidade vai ao ar</p>
            <p>Eu sou thomas</p>
            <p>A BOMBA TERMONUCLEAR</p>`;

    return `
    <section class="bloco">
        <div class="autor">
            <img src="${ endereco_foto_perfil_autor }" alt="" class="foto-perfil">
            <div class="info-autor">
                <h3 class="nome-autor goldman-bold">${ nome_autor }</h3>
                <p class="tempo-post">${ tempo_postagem }</p>
            </div>
        </div>
        <div class="conteudo-shitpost">
            ${ conteudo_texto_shitpost }
        </div>
        <div class="conjunto-imagens-shitpost">
            <img class = "imagem-shitpost" src="${ endereco_imagem }" alt="">
        </div>
    </section>
    `
}