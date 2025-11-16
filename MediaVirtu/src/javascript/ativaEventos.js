import eventosBarrasNavegacaoLateral from "./eventos/barras_navegacao_lateral_evento.js";
import addLikesDislikesEventos from "./eventos/likes_dislikes_evento.js";
import addComentarioEvento from "./eventos/comentario_evento.js";

import add_conteudo from "./add_conteudo.js";

export default function ativaEventos () {
    window.addEventListener("load", function () {
        
        eventosBarrasNavegacaoLateral();
        addLikesDislikesEventos()
        addComentarioEvento()

        const preloader = document.querySelector("#preloader");
        if (preloader) preloader.style.height = "0px";
        
    })

    /* Permite voltar para a "aba anterior"...
    Evita do usuário apertar no botão de voltar e acabar saindo do site. */
    window.addEventListener("popstate", (e) => {
    if (e.state && e.state.page) {
        localStorage.setItem("pagina_atual", e.state.page);
        
        add_conteudo();
    }
    });
}