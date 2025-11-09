import cabecalho from "./cabecalho.js"
import menus from "./barras_laterais.js"
import corpo_principal from "./corpo_principal.js"

const root = document.querySelector("#root");

root.innerHTML += cabecalho()

root.innerHTML += menus()

root.innerHTML += corpo_principal()