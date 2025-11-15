import shitpost from "./shitposts.js";
import linha_divisora from "./linha_divisora.js";

const lista_shitposts = JSON.parse(localStorage.getItem("banco_posts"));


export default function inicio () {

    return embaralhar_array(lista_shitposts.map((post) => 
        shitpost(
            post.nome,
            post.foto_perfil ? post.foto_perfil : 'pictures/MediaVirtu_icon.png',
            post.tempo_postagem,
            post.texto,
            post.imagens,
            post.likes,
            post.dislikes,
            post.codigo_post
        ) +
        linha_divisora()

    )).join('');
}


function embaralhar_array(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}