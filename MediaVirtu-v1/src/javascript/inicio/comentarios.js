export default function comentarios (codigo_post) {
    const banco_comentarios = JSON.parse(localStorage.getItem("banco_comentarios") || "[]");
    const lista_comentarios = banco_comentarios.filter((comentario) => 
        comentario.para_post == codigo_post
    );

    const comentarios = lista_comentarios.map((comentario) => 
                        `<div class = "comentario">
                        <p class = "texto-comentario">${ comentario.autor }: ${ comentario.conteudo }</p>
                        </div>`
                    ).join("")

    return `
            <div id = "bloco-comentarios-${ codigo_post }" class = "bloco-comentarios esconder-comentarios">  
                <button class = "enviar-comentario goldman-bold">
                    Escreva um comentario:
                </button>
    
                ${ comentarios ? comentarios : "<p class = 'sem-comentarios'>Ninguem comentou nada ainda...</p>" }

                    
            </div>
            `
}



function enviarComentario () {
    /*futuramente, implementar uma função para fazer comentários*/
}



function envelopaConteudo (conteudo) {
    const div = document.createElement("div");
    div.textContent = conteudo;
    return div.innerHTML
}
