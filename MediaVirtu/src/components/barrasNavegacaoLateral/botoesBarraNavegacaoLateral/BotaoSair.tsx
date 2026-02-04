"use client";

import { usePopupStore } from "@/src/store/usePopupStore";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { deslogar } from "@/src/services/supabase/deslogar";


interface props {
    opcao: string,
    imagem: string
}


// Botão de sair
export function BotaoSair ({ opcao, imagem }: props) {
    const [ isPending, startTransition ] = useTransition();

    // Cria função para setar PopUp de Menssagem;
    const PopUpMenssagem = usePopupStore((state) => state.setPopupMenssagem);

    const router = useRouter();


    const fazerLogOut = async () => {
        const { error } = await deslogar();

        // Se deslogado com sucesso, exibe menssagem e redireciona para inicio;
        if (!error) {
            PopUpMenssagem({ titulo: "Deslogado com sucesso", menssagem: "Você foi deslogado com sucesso!!\nSentiremos sua falta :(" });

           router.push("/");
        }
    }


    return <Link id = "" className = "opcao-barra-lateral" href = "" onClick = { () => startTransition(fazerLogOut) } >

                <img className = "icon-barra-ltrl" src = { imagem } alt = "" width = "100%" />

                <h3 className = "texto-opc-lateral goldman-bold" >{ opcao }</h3>

            </Link>
}