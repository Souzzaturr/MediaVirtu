import cabecalho from "./cabecalho.js"
import barrasNavegacaoLateral from "./barras_navegacao_lateral.js"
import pagina from "./corpo_principal.js"
import banco_posts from "../data/shitposts.json" assert { type: "json" };


localStorage.setItem("banco_posts", JSON.stringify(banco_posts));

localStorage.setItem("pagina_atual", "Inicio");

const root = document.querySelector("#root");

console.log(localStorage.getItem("banco_posts"))


function inicializar () {
    root.innerHTML = `
    ${ cabecalho() }
    ${ barrasNavegacaoLateral() }
    <main id = "corpo-principal"></main>
    `;
    
    add_conteudo()
    eventosBarrasNavegacaoLateral();
}

inicializar();


function add_conteudo () {
    const conteudo_pagina = document.querySelector("#corpo-principal");
    conteudo_pagina.innerHTML = pagina(localStorage.getItem("pagina_atual"));
}


function eventosBarrasNavegacaoLateral() {
  const links = document.querySelectorAll("[data-page]");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const page = e.currentTarget.dataset.page;

      localStorage.setItem("pagina_atual", page);

      add_conteudo();
    });
  });
}

/* Permite voltar para a "aba anterior"...
Evita do usuário apertar no botão de voltar e acabar saindo do site. */
window.addEventListener("popstate", (e) => {
  if (e.state && e.state.page) {
    localStorage.setItem("pagina_atual", e.state.page);
    
    render();
  }
});