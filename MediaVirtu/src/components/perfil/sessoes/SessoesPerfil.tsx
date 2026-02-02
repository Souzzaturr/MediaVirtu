"use client";



interface props {
    setSessaoPosts: () => void,
    setSessaoComentarios: () => void,
    setSessaoLikes: () => void,
    sessaoEscolhida: {
        posts: boolean,
        comentarios: boolean,
        likes: boolean
    }
};


export function SessoesPerfil ({ setSessaoPosts, setSessaoComentarios, setSessaoLikes, sessaoEscolhida }: props) {

    return <>
        <section id = "sessoes-perfil" >
            <button className = {"goldman-regular sessao-perfil " + (sessaoEscolhida.posts ? "sessao-perfil-selecionada" : "") } onClick = { setSessaoPosts } >Posts</button>

            <button className = {"goldman-regular sessao-perfil " + (sessaoEscolhida.comentarios ? "sessao-perfil-selecionada" : "") } onClick = { setSessaoComentarios } >Comentários</button>

            <button className = {"goldman-regular sessao-perfil " + (sessaoEscolhida.likes ? "sessao-perfil-selecionada" : "") } onClick = { setSessaoLikes } >Likes</button>
        </section>
    </>
}