import comentarios from "./comentarios.js";
import tresPontinhos from "../componentes_simples/tresPontinhos.js";

export default function shitpost (nome_autor, foto_perfil_autor, tempo_postagem, conteudo_texto, lista_imagens = [], qtd_likes, qtd_dislikes, codigo_post = "xxxxxxxxxx") {

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
    <section id = "post-${ codigo_post }" class="bloco bloco-shitpost">
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
            <div class = "botoes-interacao">
                ${ iconeGostei(qtd_likes, codigo_post) }
                ${ iconeNaoGostei(qtd_dislikes, codigo_post) }
                ${ iconeComentarios(codigo_post) }
            </div>
            ${ comentarios(codigo_post) }
        </div>
    </section>
    `
}



function iconeGostei (qtd_likes = 0, codigo) {
    const banco_usuarios = JSON.parse(localStorage.getItem("banco_usuarios") || "{}");
    const usuario_atual = localStorage.getItem("usuario_atual")
    
    const situacao_botao = usuario_atual != "" && banco_usuarios[usuario_atual]["likes"].includes(codigo) ? "-press" : "";

    return `
        <button id = "like-${ codigo }" class = "botao-gostei">
            <img class = "icone-gostei" src = "icones/interacao_shitpost_icons/icone-gostei${ situacao_botao }.png" alt = "gostei">
            <p id = "qtd-likes-${ codigo }">${ qtd_likes }</p>
        </button>
    `
}



function iconeNaoGostei (qtd_dislikes = 0, codigo) {
    const banco_usuarios = JSON.parse(localStorage.getItem("banco_usuarios") || "{}");
    const usuario_atual = localStorage.getItem("usuario_atual");

    const situacao_botao = usuario_atual != "" && banco_usuarios[usuario_atual]["dislikes"].includes(codigo) ? "-press" : "";

    return `
        <button id = "dislike-${ codigo }" class = "botao-naogostei">
            <img class = "icone-naogostei" src = "icones/interacao_shitpost_icons/icone-naogostei${ situacao_botao }.png" alt = "nao-gostei">
            <p id = "qtd-dislikes-${ codigo }">${ qtd_dislikes }</p>
        </button>
    `
}



function iconeComentarios (codigo_post) {
    const banco_comentarios = JSON.parse(localStorage.getItem("banco_comentarios") || "[]");
    let qtd_comentarios = 0
    banco_comentarios.forEach((comentario) => 
        comentario.para_post == codigo_post ?
        qtd_comentarios++
        : ""
    );

    return `
        <button id = "comentarios-${ codigo_post }" class = "botao-comentarios">
            <img class = "icone-comentarios" src = "icones/interacao_shitpost_icons/icone-comentarios.png" alt = "nao-gostei">
            <p id = "qtd-comentarios-shitpost-${ codigo_post }">${ qtd_comentarios }</p>
        </button>
    `
}