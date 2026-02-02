
import { Metadata } from "next";
import { redirect } from "next/navigation";

import { buscaPerfilPorNome } from "@/src/services/supabase/buscas/buscaPerfilPorNome";

import { SessaoPostsComentariosLikes } from "@/src/components/perfil/SessaoPostsComentariosLikes";
import TresPontinhos from "@/src/components/componentes_simples/TresPontinhos";



// Função para definir metadados;
export async function generateMetadata ( { params }: { params: Promise <{ nomeusuario: string }> }): Promise<Metadata> {
    const { nomeusuario } = await params;


    return {
        title: `Perfil de ${ nomeusuario } | MediaVirtu`,
        description: `Veja os posts e amigos de ${ nomeusuario } na nossa plataforma!!`,
        openGraph: {
            images: ["https://github.com/Souzzaturr/MediaVirtu/raw/main/MediaVirtu/public/icones/MediaVirtu_icons/MediaVirtu_icon.png?raw=true",]
        },
    }
}



// Página de perfil que recebe parâmero pela url;
export default async function Home ( { params }: { params: Promise <{ nomeusuario: string }> }) {
    const { nomeusuario } = await params;

    const { data, error } = await buscaPerfilPorNome(nomeusuario);

    // Se usuário não existir;
    if (error) {
        redirect('/');
    }

    
    const { avatar, name, email } = data;


    const contadorPosts = null; // Valores para exemplo;
    const contadorComentarios = null;
    const contadorLikes = null;


    return <>
        <div className = "bloco">
            <section id = "cabecalho-perfil">

                <img id = "foto-perfil" src = { avatar || "/icones/MediaVirtu_icons/MediaVirtu_icon.png" } alt="" />

                <div id = "infos-rapidas-perfil" >

                    <h2 id = "nome-perfil" className = "goldman-bold" >{ name }</h2>

                    <p id = "email-perfil" className = "goldman-regular" >{ email }</p>


                    <div id = "contagens-perfil" >
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
                
            </section>
            
            <SessaoPostsComentariosLikes posts = { [] } comentarios = { [] } likes = { [] } />          {/* Alterar listas vazias para listas contendo conteúdo de cada sessão depois */}

            
        </div>
    </>
}