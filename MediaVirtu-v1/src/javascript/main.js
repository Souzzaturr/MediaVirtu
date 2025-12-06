import cabecalho from "./cabecalho.js";
import barrasNavegacaoLateral from "./barras_navegacao_lateral.js";
import preloader from "./componentes_simples/preloader_construtor.js";
import add_conteudo from "./add_conteudo.js";
import ativaEventos from "./ativaEventos.js";
import banco_posts from "../data/shitposts.json" assert { type: "json" };
import banco_usuarios from "../data/usuarios.json" assert { type: "json" };
import banco_comentarios from "../data/comentarios.json" assert { type: "json" };


if (!localStorage.getItem("banco_posts")) localStorage.setItem("banco_posts", JSON.stringify(banco_posts));

if (!localStorage.getItem("banco_usuarios")) localStorage.setItem("banco_usuarios", JSON.stringify(banco_usuarios));
if (!localStorage.getItem("usuario_atual")) localStorage.setItem("usuario_atual", banco_usuarios["Adm_Supremo"]["nome"] || "");

if (!localStorage.getItem("banco_comentarios")) localStorage.setItem("banco_comentarios", JSON.stringify(banco_comentarios));

localStorage.setItem("pagina_atual", "Inicio");


const root = document.querySelector("#root");


inicializar();
add_conteudo();
ativaEventos();



function inicializar () {
    root.innerHTML = `
    ${ preloader() }
    ${ cabecalho() }
    ${ barrasNavegacaoLateral() }
    <main id = "corpo-principal"></main>
    `;
    
}