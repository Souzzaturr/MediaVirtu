export default function addLikesDislikesEventos () {
    const feed = document.querySelector("#corpo-principal");

    likeEvento(feed);
    dislikeEvento(feed);
}

/*dar like*/
function likeEvento (feed) {
    feed.addEventListener("click", (event) => {
        const botao_gostei = event.target.closest(".botao-gostei");
        
        if (!botao_gostei) return;
        
        /*dados importantes do próprio botão de like*/
        const codigo_post = botao_gostei.id.slice(5);
        const icone_gostei = botao_gostei.querySelector(`.icone-gostei`);
        const qtd_likes = botao_gostei.querySelector(`#qtd-likes-${ codigo_post }`);
        const lista_likes = JSON.parse(localStorage.getItem("lista_likes") || "[]");

        /*dados do botão de dislike*/
        const icone_naogostei = document.querySelector(`#post-${ codigo_post } .icone-naogostei`);
        const qtd_dislikes = document.querySelector(`#post-${ codigo_post } #qtd-dislikes-${ codigo_post }`);
        const lista_dislikes = JSON.parse(localStorage.getItem("lista_dislikes") || "[]");
        

        if (lista_likes.includes(codigo_post)) {

            icone_gostei.src = "icones/interacao_shitpost_icons/icone-gostei.png";
            qtd_likes.textContent = Number(qtd_likes.textContent) - 1;

            removerElementoPorValor(lista_likes, codigo_post);

        } else {
            
            icone_gostei.src = "icones/interacao_shitpost_icons/icone-gostei-press.png";
            qtd_likes.textContent = Number(qtd_likes.textContent) + 1;
            lista_likes.push(codigo_post);

            /*se botão de dislike estiver marcado*/
            if (lista_dislikes.includes(codigo_post)) {
                icone_naogostei.src = "icones/interacao_shitpost_icons/icone-naogostei.png";
                qtd_dislikes.textContent = Number(qtd_dislikes.textContent) - 1;
                removerElementoPorValor(lista_dislikes, codigo_post);
            }
        }
    
        localStorage.setItem("lista_likes", JSON.stringify(lista_likes));
        localStorage.setItem("lista_dislikes", JSON.stringify(lista_dislikes));
    });
}


/*dar dislike*/
function dislikeEvento (feed) {
    feed.addEventListener("click", (event) => {
        const botao_naogostei = event.target.closest(".botao-naogostei");

        if (!botao_naogostei) return;

        /*dados importantes do próprio botão de dislike*/
        const codigo_post = botao_naogostei.id.slice(8);
        const icone_naogostei = botao_naogostei.querySelector(".icone-naogostei");
        const qtd_dislikes = botao_naogostei.querySelector(`#qtd-dislikes-${ codigo_post }`);
        const lista_dislikes = JSON.parse(localStorage.getItem("lista_dislikes") || "[]");

        /*dados do botão like*/
        const icone_gostei = document.querySelector(`#post-${ codigo_post } .icone-gostei`);
        const qtd_likes = document.querySelector(`#post-${ codigo_post } #qtd-likes-${ codigo_post }`);
        const lista_likes = JSON.parse(localStorage.getItem("lista_likes") || "[]");

        if (lista_dislikes.includes(codigo_post)) {

            icone_naogostei.src = "icones/interacao_shitpost_icons/icone-naogostei.png";
            qtd_dislikes.textContent = Number(qtd_dislikes.textContent) - 1;

            removerElementoPorValor(lista_dislikes, codigo_post);

        } else {

            icone_naogostei.src = "icones/interacao_shitpost_icons/icone-naogostei-press.png";
            qtd_dislikes.textContent = Number(qtd_dislikes.textContent) + 1;
            lista_dislikes.push(codigo_post);

            /*se botão de like estiver marcado*/
            if (lista_likes.includes(codigo_post)) {
                icone_gostei.src = "icones/interacao_shitpost_icons/icone-gostei.png";
                qtd_likes.textContent = Number(qtd_likes.textContent) - 1;
                removerElementoPorValor(lista_likes, codigo_post);
            }
        }

        localStorage.setItem("lista_dislikes", JSON.stringify(lista_dislikes));
        localStorage.setItem("lista_likes", JSON.stringify(lista_likes));
    });
}


function removerElementoPorValor(array, elemento) {
    const indice = array.indexOf(elemento);
    if (indice > -1) {
        array.splice(indice, 1);
    }
    return array;
}