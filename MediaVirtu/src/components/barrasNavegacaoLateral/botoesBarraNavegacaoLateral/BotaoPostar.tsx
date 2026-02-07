"use client";

import { usePopupStore } from "@/src/store/usePopupStore";
import { useAuthStore } from "@/src/store/useAuthStore";

import { useRouter } from "next/navigation";


interface props {
    opcao: string,
    imagem: string
}


// Botão de sair
export function BotaoPostar({ opcao, imagem }: props) {
    const abrirPopup = usePopupStore((state) => state.openPopupPostForm);
    const fecharPopup = usePopupStore((state) => state.closePopupPostForm);
    const Menssagem = usePopupStore((state) => state.setPopupMenssagem);
    const show = usePopupStore((state) => state.popupPostForm.show);
    const tahlogado = useAuthStore((state) => state.user);
    const router = useRouter();

    const handleAction = (e: React.MouseEvent) => {
        e.preventDefault(); // Segurança extra

        if (!tahlogado) {
            Menssagem({ titulo: "Você precisa criar uma conta!", menssagem: "Para postar um shitpost, você precisa ter uma conta!\nVocê será redirecionado para a página de Cadastro..."});

            fecharPopup();

            router.push("/Acesso/Cadastro");

            return;
        }

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