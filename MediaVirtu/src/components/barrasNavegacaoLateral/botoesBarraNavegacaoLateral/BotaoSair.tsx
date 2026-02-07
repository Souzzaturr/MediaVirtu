"use client";

import { usePopupStore } from "@/src/store/usePopupStore";
import { useAuthStore } from "@/src/store/useAuthStore";

import { useTransition } from "react";

import { useRouter } from "next/navigation";

import { deslogar } from "@/src/services/supabase/deslogar";
import { setupMaster } from "node:cluster";


interface props {
    opcao: string,
    imagem: string
}


// Botão de sair
export function BotaoSair ({ opcao, imagem }: props) {
    const [ isPending, startTransition ] = useTransition();
    const setUser = useAuthStore((state) => state.setUser);

    // Cria função para setar PopUp de Menssagem;
    const PopUpMenssagem = usePopupStore((state) => state.setPopupMenssagem);

    const router = useRouter();


    const fazerLogOut = async () => {
        const { error } = await deslogar();

        // Se deslogado com sucesso, exibe menssagem e redireciona para inicio;
        if (!error) {
            PopUpMenssagem({ titulo: "Deslogado com sucesso", menssagem: "Você foi deslogado com sucesso!!\nSentiremos sua falta :(" });

            // Limpa usuário no zustand;
            setUser(null);

           router.push("/");
        }
    }


    return <button id = "" className = "opcao-barra-lateral botao-barra-lateral" onClick = { () => startTransition(fazerLogOut) } >

                <img className = "icon-barra-ltrl" src = { imagem } alt = "" width = "100%" />

                <h3 className = "texto-opc-lateral goldman-bold" >{ opcao }</h3>

            </button>
}