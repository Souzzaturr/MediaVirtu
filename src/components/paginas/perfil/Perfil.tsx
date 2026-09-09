"use client";

import { buscaPerfilPorNome } from "@/src/services/supabase/buscas/buscaPerfilPorNome";

import { usePopupStore } from "@/src/store/usePopupStore";

import TresPontinhos from "@/src/components/componentes_simples/TresPontinhos";
import { SessaoPostsComentariosLikes } from "@/src/components/paginas/perfil/SessaoPostsComentariosLikes";
import Membrana from "@/src/components/componentes_simples/Membrana";
import { useEffect, useState } from "react";


interface props {
    userName: string,
};


const dataInLoading = {
    avatar: "",
    name: "Carregando...",
    email: "...",
    id: ""
};

const fetchStages = {
    loading: true,
    sucess: false,
    failed: false
};


export default function Perfil({userName}: props) {
    const [ fetchStatus, setFetchStatus ] = useState(fetchStages);
    const [ data, setData ] = useState(dataInLoading);
    const setPopupMessage = usePopupStore((state) => state.setPopupMenssagem);

    useEffect(() => {
        async function busca() {
            const { data, error } = await buscaPerfilPorNome(userName);

            if (error) {
                setFetchStatus({loading: false, sucess: false, failed: true});
                setData((prev) => ({...prev, name: "Perfil não encontrado :("}))
                setPopupMessage({titulo: "Perfil não encontrado", menssagem: `Não foi possível localizar o perfil buscado :( \nO nome do usuário é realmente ${userName}?`})
                return;
            }

            setData(data);
            setFetchStatus({loading: false, sucess: true, failed: false});
        };

        busca();

    }, []);


    const contadorPosts = null;
    const contadorComentarios = null;
    const contadorLikes = null;


    return <>
        <div className = "bloco">
            <section className = "cabecalho-perfil ">

                <Membrana hideMembrana={!fetchStatus.loading && !fetchStatus.failed} >
                    <img className = "min-w-[200px] rounded-[100%]" src = { data.avatar || "/pictures/MediaVirtu_icon.png" } alt="" />
                </Membrana>

                <div className="flex justify-between grow" >
                    <div className="flex flex-col gap-3" >
                        <h2 className = "goldman-bold text-4xl" >{ data.name }</h2>

                        <p className = "goldman-regular" >{ data.email }</p>


                        <div className = "flex gap-5 " >
                            <div className = "contagem">
                                <h4 className = "goldman-regular" >Postagens</h4>
                                <p>{ contadorPosts || "..." }</p>
                            </div>

                            <div className = "contagem">
                                <h4 className = "goldman-regular" >Comentários</h4>
                                <p>{ contadorComentarios || "..." }</p>
                            </div>

                            <div className = "contagem">
                                <h4 className = "goldman-regular" >Likes</h4>
                                <p>{ contadorLikes || "..." }</p>
                            </div>
                        </div>

                    </div>

                    <TresPontinhos/>
                </div>
                
            </section>
            
            <SessaoPostsComentariosLikes posts = { [] } comentarios = { [] } likes = { [] } />          {/* Alterar listas vazias para listas contendo conteúdo de cada sessão depois */}

            
        </div>
    </>
}