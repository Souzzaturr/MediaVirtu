"use client";

import { useState } from "react";

import { SessoesPerfil } from "@/src/components/paginas/perfil/sessoes/SessoesPerfil";
import { ExibidorSessoes } from "@/src/components/paginas/perfil/sessoes/ExibidorSessoes";



interface props {
    posts: posts[],
    comentarios: comentarios[],
    likes: likes[]
};

export interface posts {
    id: string,
    autor_id: string,
    description: string,
    images: string[],
    created_at: string
};

export interface comentarios {

}

export interface likes {

}


const valoresPadraoSessaoEscolhida = {
    posts: false,
    comentarios: false,
    likes: false
};


export function SessaoPostsComentariosLikes ({ posts, comentarios, likes }: props) {
    const [ sessaoEscolhida, setSessaoEscolhida ] = useState({...valoresPadraoSessaoEscolhida, posts: true});

    
    return <>

        <SessoesPerfil 
            setSessaoPosts = { () => setSessaoEscolhida({...valoresPadraoSessaoEscolhida, posts: true}) } 
            setSessaoComentarios = { () => setSessaoEscolhida({...valoresPadraoSessaoEscolhida, comentarios: true}) } 
            setSessaoLikes = { () => setSessaoEscolhida({...valoresPadraoSessaoEscolhida, likes: true}) }
            sessaoEscolhida = { sessaoEscolhida }
            />


        <ExibidorSessoes posts = { posts } comentarios = { comentarios } likes = { likes } sessaoEscolhida = { sessaoEscolhida } />


    </>
}