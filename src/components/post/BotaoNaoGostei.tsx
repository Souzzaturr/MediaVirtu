"use client";

import banco_usuarios from "../../data/usuarios.json";

interface props {
    qtd_dislikes: number;
    codigo_post: string;
}

export default function BotaoNaoGostei ({qtd_dislikes, codigo_post}: props) {
    //const banco_usuarios = JSON.parse(localStorage.getItem("banco_usuarios") || "{}");
    const usuario_atual = null;
    const situacao_botao = "";

    return <>
        <button id = { "dislike-" + codigo_post } className = "botao-naogostei">
            <img className = "icone-naogostei" src = { "icones/interacao_shitpost_icons/icone-naogostei" + situacao_botao + ".png" } alt = "botao-nao-gostei"/>
            <p id = { "qtd-dislikes-" + codigo_post }>{ qtd_dislikes }</p>
        </button>
    </>
}