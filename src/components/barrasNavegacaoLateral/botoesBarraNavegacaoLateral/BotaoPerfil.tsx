"use client";


import { useAuthStore } from "@/src/store/useAuthStore";
import Link from "next/link";


export default function BotaoPerfil() {
    const user = useAuthStore((state) => state.user);
    const avatarUrl = useAuthStore((state) => state.avatarUrl);

    return <Link id = "" className = "opcao-barra-lateral" href = {user ? "/perfis" : "/acesso/cadastro"} data-page = "" >
                <div className="hover-opcao-color"></div>

                <img className = "icon-barra-ltrl rounded-[100%]" src = {avatarUrl} alt = "" width = "100%" />

                <h3 className = "texto-opc-lateral goldman-bold" >{user ? "Meu Perfil" : "Cadastrar-se"}</h3>

            </Link>
}