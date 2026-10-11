"use client";

import { usePopupStore } from "@/src/store/usePopupStore";
import { useAuthStore } from "@/src/store/useAuthStore";

import MensagemSimplesFormModal from "@/src/components/modal/modelos_de_conteudo/MensagemSimplesFormModal";

import { useRouter } from "next/navigation";

import DefaultButton from "@/src/components/buttons/DefaultButton";


interface props {
    opcao: string,
    imagem: string
}


// Botão de sair
export function BotaoPostar({ opcao, imagem }: props) {
    const abrirPopup = usePopupStore((state) => state.openPopupPostForm);
    const abrirModal = usePopupStore((state) => state.setModal);
    const fecharModal = usePopupStore((state) => state.closeModal);
    const fecharPopup = usePopupStore((state) => state.closePopupPostForm);
    const Menssagem = usePopupStore((state) => state.setPopupMenssagem);
    const show = usePopupStore((state) => state.popupPostForm.show);
    const user = useAuthStore((state) => state.user);
    const userIsLoading = useAuthStore((state) => state.loading);
    const router = useRouter();

    const handleAction = (e: React.MouseEvent) => {
        e.preventDefault(); // Segurança extra

        if (userIsLoading) {
            fecharPopup();

            router.refresh();

        } else if (!user) {

            abrirModal(
                <MensagemSimplesFormModal titulo="Conta necessária"
                    mensagem={`Você precisa de uma conta para poder realizar uma postagem!
                        Deseja ir para a página de cadastro?`}
                    simFunction={() => {
                        router.push("/acesso/cadastro");
                        fecharModal();
                    }}
                    naoFunction={fecharModal}
                />
            );

            return;
        }

        if (show) fecharPopup();
        else abrirPopup();
    };

    return (
        <button type="button" className="opcao-barra-lateral botao-barra-lateral" onClick={handleAction} >
            <div className="hover-opcao-color"></div>

            <img className="icon-barra-ltrl" src={imagem} alt="" width="100%" />

            <h4 className="texto-opc-lateral goldman-bold">{opcao}</h4>

        </button>
    );
}