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

        const usuario_atual = localStorage.getItem("usuario_atual");
        if (!usuario_atual) return;

        /*banco de usuarios e posts*/
        const banco_usuarios = JSON.parse(localStorage.getItem("banco_usuarios"));
        const banco_posts = JSON.parse(localStorage.getItem("banco_posts"));
        
        /*dados importantes do próprio botão de like*/
        const codigo_post = botao_gostei.id.slice(5);

        const icone_gostei = botao_gostei.querySelector(`.icone-gostei`);
        const qtd_likes = botao_gostei.querySelector(`#qtd-likes-${ codigo_post }`);

        /*dados do botão de dislike*/
        const icone_naogostei = document.querySelector(`#post-${ codigo_post } .icone-naogostei`);
        const qtd_dislikes = document.querySelector(`#post-${ codigo_post } #qtd-dislikes-${ codigo_post }`);
        

        if (banco_usuarios[usuario_atual]["likes"].includes(codigo_post)) {

            icone_gostei.src = "icones/interacao_shitpost_icons/icone-gostei.png";
            qtd_likes.textContent = Number(qtd_likes.textContent) - 1;

            banco_usuarios[usuario_atual]["likes"] = removerElementoPorValor(banco_usuarios[usuario_atual]["likes"], codigo_post);

            const post = banco_posts.find(p => String(p.codigo_post) === String(codigo_post));
            if (post) post.likes = Number(post.likes) - 1;

        } else {
            
            icone_gostei.src = "icones/interacao_shitpost_icons/icone-gostei-press.png";
            qtd_likes.textContent = Number(qtd_likes.textContent) + 1;
            banco_usuarios[usuario_atual]["likes"].push(codigo_post);

            const post = banco_posts.find(p => String(p.codigo_post) === String(codigo_post));
            if (post) post.likes = Number(post.likes) + 1;

            /*se botão de dislike estiver marcado*/
            if (banco_usuarios[usuario_atual]["dislikes"].includes(codigo_post)) {
                icone_naogostei.src = "icones/interacao_shitpost_icons/icone-naogostei.png";
                qtd_dislikes.textContent = Number(qtd_dislikes.textContent) - 1;
                banco_usuarios[usuario_atual]["dislikes"] = removerElementoPorValor(banco_usuarios[usuario_atual]["dislikes"], codigo_post);

                const post = banco_posts.find(p => String(p.codigo_post) === String(codigo_post));
                if (post) post.dislikes = Number(post.dislikes) - 1;
            }
        }   
        
        localStorage.setItem("banco_usuarios", JSON.stringify(banco_usuarios));
        localStorage.setItem("banco_posts", JSON.stringify(banco_posts));
    });
}


/*dar dislike*/
function dislikeEvento (feed) {
    feed.addEventListener("click", (event) => {
        const botao_naogostei = event.target.closest(".botao-naogostei");
        if (!botao_naogostei) return;

        const usuario_atual = localStorage.getItem("usuario_atual");
        if (!usuario_atual) return;

        /*banco de usuarios e posts*/
        const banco_usuarios = JSON.parse(localStorage.getItem("banco_usuarios"));
        const banco_posts = JSON.parse(localStorage.getItem("banco_posts"));

        /*dados importantes do próprio botão de dislike*/
        const codigo_post = botao_naogostei.id.slice(8);
        
        const icone_naogostei = botao_naogostei.querySelector(".icone-naogostei");
        const qtd_dislikes = botao_naogostei.querySelector(`#qtd-dislikes-${ codigo_post }`);

        /*dados do botão like*/
        const icone_gostei = document.querySelector(`#post-${ codigo_post } .icone-gostei`);
        const qtd_likes = document.querySelector(`#post-${ codigo_post } #qtd-likes-${ codigo_post }`);

        if (banco_usuarios[usuario_atual]["dislikes"].includes(codigo_post)) {

            icone_naogostei.src = "icones/interacao_shitpost_icons/icone-naogostei.png";
            qtd_dislikes.textContent = Number(qtd_dislikes.textContent) - 1;

            banco_usuarios[usuario_atual]["dislikes"] = removerElementoPorValor(banco_usuarios[usuario_atual]["dislikes"], codigo_post);

            const post = banco_posts.find(p => String(p.codigo_post) === String(codigo_post));
            if (post) post.dislikes = Number(post.dislikes) - 1;

        } else {

            icone_naogostei.src = "icones/interacao_shitpost_icons/icone-naogostei-press.png";
            qtd_dislikes.textContent = Number(qtd_dislikes.textContent) + 1;
            banco_usuarios[usuario_atual]["dislikes"].push(codigo_post);

            const post = banco_posts.find(p => String(p.codigo_post) === String(codigo_post));
            if (post) post.dislikes = Number(post.dislikes) + 1;

            /*se botão de like estiver marcado*/
            if (banco_usuarios[usuario_atual]["likes"].includes(codigo_post)) {
                icone_gostei.src = "icones/interacao_shitpost_icons/icone-gostei.png";
                qtd_likes.textContent = Number(qtd_likes.textContent) - 1;
                banco_usuarios[usuario_atual]["likes"] = removerElementoPorValor(banco_usuarios[usuario_atual]["likes"], codigo_post);

                const post = banco_posts.find(p => String(p.codigo_post) === String(codigo_post));
                if (post) post.likes = Number(post.likes) - 1;
            }
        }

        localStorage.setItem("banco_usuarios", JSON.stringify(banco_usuarios));
        localStorage.setItem("banco_posts", JSON.stringify(banco_posts));
    });
}


function removerElementoPorValor(array, elemento) {
    const indice = array.indexOf(elemento);
    if (indice > -1) {
        array.splice(indice, 1);
    }
    return array;
}