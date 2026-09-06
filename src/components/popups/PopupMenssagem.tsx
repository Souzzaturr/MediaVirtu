"use client";


import { usePopupStore } from "@/src/store/usePopupStore";
import React, { MouseEventHandler } from "react";




// Para usar esse componente, você precisa importar o usePopupStore,
// atribuir a função setPopupMenssagem para uma variável,
// e quando utilizar a variável, passar um objeto contendo as seguintes chaves:
// titulo: o titulo que você quer que a menssagem tenha | string;
// menssagem: a menssagem que você quer passar | string;



export default function PopupMenssagem () {
    // Busca dados inseridos no store de PopUps de Menssagem;
    const { titulo, menssagem, show } = usePopupStore((state) => state.popupMensagem);
    // Busca função de fechar PopUp no store de Popups de Menssagem;
    const close = usePopupStore((state) => state.closePopupMenssagem)


    // Retorna nada caso "show" for (false)
    if (!show) return null


    // Chama a função de fechar o componente caso seja clicado fora do mesmo
    const clickOutPopup = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.id === "fundo-popup") close()
    }


    return <>
        <div id="fundo-popup" className = { "fundo-popup" + (show ? "" : "hide") } onClick = { clickOutPopup }>
            <section id="corpo-popup" className = "corpo-popup rgb-border-fade">
                <h1 className = "goldman-bold text-2xl text-center">{ titulo }</h1>

                <div className="flex flex-col gap-1 items-center overflow-y-scroll w-[100%] text-center" >
                    { menssagem.split("\n").map((linha: string) => <p>{ linha }</p>) }
                </div>

                <button className = "botao-fundo-transparente" onClick = { close }>Ok</button>
            </section>
        </div>
    </>
}