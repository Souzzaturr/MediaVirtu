"use client";

import { usePopupStore } from "@/src/store/usePopupStore";


interface props {
    opcao: string,
    imagem: string
}


// Botão de sair
export function BotaoPostar({ opcao, imagem }: props) {
    const abrirPopup = usePopupStore((state) => state.openPopupPostForm);
    const fecharPopup = usePopupStore((state) => state.closePopupPostForm);
    const show = usePopupStore((state) => state.popupPostForm.show);

    const handleAction = (e: React.MouseEvent) => {
        e.preventDefault(); // Segurança extra
        if (show) fecharPopup();
        else abrirPopup();
    };

    return (
        <button 
            type="button" // Evita submissão acidental de formulários
            className="opcao-barra-lateral botao-barra-lateral" 
            onClick={handleAction}
        >
            <img className="icon-barra-ltrl" src={imagem} alt="" width="100%" />
            <h4 className="texto-opc-lateral goldman-bold">{opcao}</h4>
        </button>
    );
}