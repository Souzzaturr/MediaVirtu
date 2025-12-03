import banco_comentarios from "../../data/comentarios.json";

interface comentario {
    autor: string,
    para_post: string,
    conteudo: string
}

interface props {
    codigo_post: string;
}

export default function MenuComentarios ({codigo_post}: props) {
//    const banco_comentarios = JSON.parse(localStorage.getItem("banco_comentarios") || "[]");
    const lista_comentarios = banco_comentarios.filter((comentario: comentario) =>
        comentario.para_post === codigo_post
    )
    let comentarios = lista_comentarios.map((comentario: comentario) =>
        <div className = "comentario">
            <p className = "texto-comentario">{comentario.autor}: {comentario.conteudo}</p>
        </div>
    )

    return <>
        <div id = { "bloco-comentarios" + codigo_post } className = "bloco-comentarios enconder-comentarios">
            <button className = "enviar-comentario goldman-bold">
                Escreva um comentário:
            </button>

            { comentarios.length > 0 ?
                comentarios :
                <p className = "sem-comentarios">Ninguem comentou nada ainda...</p>
            }

        </div>
    </>
}