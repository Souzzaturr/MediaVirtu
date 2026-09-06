"use client";


import { usePopupStore } from "@/src/store/usePopupStore";


export default function BotaoConfiguracoes() {
    const setMenssagem = usePopupStore((state) => state.setPopupMenssagem);

    function showMessage() {
        setMenssagem({titulo: "Funcionalidade não implementada", menssagem: "Ainda não implementamos essa funcionalidade. \nAssim que possível atualizaremos isso!"});
    }

    // trocar tag button por tag Link do next/Link e adicionar endereçamento para nova página
    return <button id = "" className = "opcao-barra-lateral cursor-pointer" onClick={showMessage} data-page = "" >
                <div className="hover-opcao-color"></div>

                <h3 className = "texto-opc-lateral goldman-bold" >Configurações</h3>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-configuracoes.svg" alt="" width = "100%" />

            </button>
}