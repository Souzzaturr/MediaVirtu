import cabecalho from "./cabecalho.js"
import menus from "./barras_laterais.js"

const root = document.querySelector("#root");

root.innerHTML += cabecalho()

root.innerHTML += menus()