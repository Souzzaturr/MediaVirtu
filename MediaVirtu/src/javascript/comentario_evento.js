export default function addComentarioEvento () {
    const feed = document.querySelector("#corpo-principal");

    feed.addEventListener("click", (event) => {
        const botao_comentarios = event.target.closest(".botao-comentarios");

        if (!botao_comentarios) return;

        const codigo_post = botao_comentarios.id.slice(12);

        const bloco_comentarios = document.querySelector(`#bloco-comentarios-${ codigo_post }`);

        bloco_comentarios.classList.toggle("esconder-comentarios")
    })
}