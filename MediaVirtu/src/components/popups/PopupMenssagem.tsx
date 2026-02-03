"use client";


import { usePopupStore } from "@/src/store/usePopupStore";




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
    const clickOutPopup = (event: EventTarget) => {
        if (event.target.id === "fundo-popup") close
    }


    return <>
        <div id="fundo-popup" className = { show ? "" : "hide"} onClick = { clickOutPopup }>
            <div id="corpo-popup" className = "rgb-border-fade">
                <h3 className = "goldman-regular">{ titulo }</h3>

                { menssagem.split("\n").map((linha: string) => <p>{ linha }</p>) }

                <button className = "botao-fundo-transparente" onClick = { close }>Ok</button>
            </div>
        </div>
    </>
}