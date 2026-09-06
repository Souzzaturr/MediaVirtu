"use client";


import { usePopupStore } from "@/src/store/usePopupStore";
import Link from "next/link";


export default function BotaoExcluir() {
    const setMenssagem = usePopupStore((state) => state.setPopupMenssagem);

    function showMessage() {
        setMenssagem({titulo: "Funcionalidade não implementada", menssagem: "Essa funcionalidade ainda não foi implementada :( \nAssim que possível isso será atualizado!"});
    }

    // Trocar elemento button para Link do next/Link e adicionar href = "/Excluir"
    return <button id = "" className = "opcao-barra-lateral cursor-pointer" onClick={showMessage} data-page = "" >
                <div className="hover-opcao-color"></div>

                <img className = "icon-barra-ltrl" src = "/icones/menu_lateral_icons/icone-excluir.svg" alt = "" width = "100%" />

                <h3 className = "texto-opc-lateral goldman-bold" >Excluir</h3>

            </button>
}