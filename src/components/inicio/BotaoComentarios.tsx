"use client";

import banco_comentarios from "../../data/comentarios.json";

interface comentario {
    autor: string,
    para_post: string,
    conteudo: string
}

interface props {
    codigo_post: string;
    className?: string;
}

export default function BotaoComentarios ({codigo_post, className}: props) {
    //const banco_comentarios = JSON.parse(localStorage.getItem("banco_comentarios") || "[]");
    let qtd_comentarios = 0;
    banco_comentarios.forEach((comentario: comentario) => 
        comentario.para_post === codigo_post ?
        qtd_comentarios++
        : ""
    );

    return <>
        <button id = { "comentarios-" + codigo_post } className = {"botao-comentarios " + className}>
            <img className = "icone-comentarios" src = "icones/interacao_shitpost_icons/icone-comentarios.png" alt = "comentarios"/>
        </button>
    </>
}