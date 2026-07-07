"use client";

interface props {
    qtd_likes: number;
    codigo_post: string;
}

export default function BotaoGostei ({qtd_likes, codigo_post}: props) {
    //const banco_usuarios = JSON.parse(localStorage.getItem("banco_usuarios") || "{}");
    //const usuario_atual = localStorage.getItem("usuario_atual") || "";
    const situacao_botao = ""; //banco_usuarios[usuario_atual]["likes"].includes(codigo_post) ? "-press" : "";

    return <>
        <button id = { "like-" + codigo_post } className = "botao-gostei">
            <img className = "icone-gostei" src = { "icones/interacao_shitpost_icons/icone-gostei" + situacao_botao + ".png" } alt = "botao-gostei"/>
            <p id = { "qtd-likes-" + codigo_post } >{ qtd_likes }</p>
        </button>
    </>
}