import add_conteudo from "../add_conteudo.js";

export default function eventoBarrasNavegacaoLateral() {
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