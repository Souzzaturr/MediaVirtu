"use client";


import { usePopupStore } from "@/src/store/usePopupStore";

// Componentes
import Shitposts from "@/src/components/inicio/Shitposts";
import { ButtonCloseX } from "@/src/components/componentes_simples/ButtonCloseX";



export interface posts {
    id: string,
    autor_id: string,
    description: string,
    images: string[],
    created_at: string,
    profiles: {
        id: string,
        name: string,
        avatar: string
    }
};



export function PopupShitpost () {
    const { show, id, autor_id, description, images, created_at, profiles } = usePopupStore((state) => state.popupShitpost)
    const close = usePopupStore((state) => state.closePopupShitpost);


    const clickOut = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains("fundo-popup")) close()
    }


    if (!show) return null



    return <>
        <div className = "fundo-popup" onClick = { clickOut } >

            <ButtonCloseX closeFunction = { close } >

                <Shitposts post = { { nome: profiles.name, foto_perfil: profiles.avatar, tempo_postagem: created_at, texto: description, imagens: images, likes: 0, dislikes: 0, codigo_post: id } } />

            </ButtonCloseX>

        </div>
    </>
}