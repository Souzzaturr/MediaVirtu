import { } from "barras_navegacao_laterais.js";
import { } from "likes_dislikes.js";
import { } from "comentario_evento.js";

export default function ativaEventos () {
    window.addEventListener("load", function () {
        
        add_conteudo()
        eventosBarrasNavegacaoLateral();
        addLikesDislikesEventos()
        addComentarioEvento()

        const preloader = document.querySelector("#preloader");
        if (preloader) preloader.style.display = "none";
        
    })
}