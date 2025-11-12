import cabecalho from "./cabecalho.js"
import menus from "./barras_laterais.js"
import pagina from "./corpo_principal.js"

export var pagina_atual = "Inicio";

const root = document.querySelector("#root");


function inicializar () {
    root.innerHTML = `
    ${ cabecalho() }
    ${ menus() }
    <main id = "corpo-principal"></main>
    `;
    
    add_conteudo()
    eventos_menu();
}

inicializar();


function add_conteudo () {
    const conteudo_pagina = document.querySelector("#corpo-principal");
    conteudo_pagina.innerHTML = pagina(pagina_atual);
}


function eventos_menu() {
  const links = document.querySelectorAll("[data-page]");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const page = e.currentTarget.dataset.page;

      pagina_atual = page;

      add_conteudo();
    });
  });
}

/* Permite voltar para a "aba anterior"...
Evita do usuário apertar no botão de voltar e acabar saindo do site. */
window.addEventListener("popstate", (e) => {
  if (e.state && e.state.page) {
    pagina_atual = e.state.page;
    
    render();
  }
});