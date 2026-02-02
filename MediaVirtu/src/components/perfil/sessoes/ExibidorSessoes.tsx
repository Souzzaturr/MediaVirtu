"use client";

import { type posts, type comentarios, type likes } from "@/src/components/perfil/SessaoPostsComentariosLikes";



interface props {
    posts: posts[],
    comentarios: comentarios[],
    likes: likes[]
    sessaoEscolhida: sessaoEscolhida
};


interface sessaoEscolhida {
    posts: boolean,
    comentarios: boolean,
    likes: boolean
}



// Componente que exibe apenas a sessão escolhida;
export function ExibidorSessoes ({ posts, comentarios, likes, sessaoEscolhida }: props) {

    // Sessão de Posts do usuário;

    if (sessaoEscolhida.posts) return <>
        <div className = "sessao_perfil" >

            { (posts.length === 0) ? <h3 className = "msgm-sem-conteudo-sessao goldman-regular" >Parece que o usuário não tem nenhum post... :(</h3> : 
            
            <p>Posts...</p> // adicionar compnente que recebe lista de posts e organiza tudo...
            
            }

        </div>
    </>


    // Sessão de Comentários do usuário;

    if (sessaoEscolhida.comentarios) return <>
        <div className = "sessao_perfil" >

            { (comentarios.length === 0) ? <h3 className = "msgm-sem-conteudo-sessao goldman-regular" >Parece que o usuário não fez nenhum comentário ainda... :(</h3> : 
            
            <p>Comentarios...</p> // adicionar compnente que recebe lista de comentarios e organiza tudo...
            
            }

        </div>
    </>


    // Sessão de Likes do usuário;

    if (sessaoEscolhida.likes) return <>
        <div className = "sessao_perfil" >

            { (likes.length === 0) ? <h3 className = "msgm-sem-conteudo-sessao goldman-regular" >Parece que o usuário não gostou de nenhum post ainda... :(</h3> : 
            
            <p>Likes...</p> // adicionar compnente que recebe lista de likes e organiza tudo...
            
            }
            
        </div>
    </>

}