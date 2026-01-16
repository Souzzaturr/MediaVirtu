"use client";

interface props {
    titulo: string,
    menssagem: string,
    show: boolean,
    onClose: () => void
}

// Para usar esse componente, você precisa passar como props para ele:
// titulo da menssagem: um titulo breve e claro;
// menssagem: a menssagem que você quer passar;
// show (true/false): (true) se quiser que o componente apareça, (false) caso contrario;
// onClose: Função callback declarada no componente pai para fechar este componente, alterando o valor de sua props show para false;

export default function PopupMenssagem (props: props) {
    // Retorna nada caso "show" for (false)
    if (!props.show) return null

    // Chama a função de fechar o componente caso seja clicado fora do mesmo
    const clickOutPopup = (event: EventTarget) => {
        if (event.target.id === "fundo-popup") props.onClose()
    }

    return <>
        <div id="fundo-popup" className = { props.show ? "" : "hide"} onClick = { clickOutPopup }>
            <div id="corpo-popup" className = "rgb-border-fade">
                <h3 className = "goldman-regular">{ props.titulo }</h3>

                { props.menssagem.split("\n").map((linha: string) => <p>{ linha }</p>) }

                <button className = "botao-fundo-transparente" onClick = { props.onClose }>Ok</button>
            </div>
        </div>
    </>
}