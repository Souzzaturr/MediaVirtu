import pagina from "./pagina.js";

export default function add_conteudo () {
    const conteudo_pagina = document.querySelector("#corpo-principal");
    conteudo_pagina.innerHTML = pagina(localStorage.getItem("pagina_atual"));
}