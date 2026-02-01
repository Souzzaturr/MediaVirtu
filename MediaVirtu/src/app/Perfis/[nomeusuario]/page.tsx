
import { redirect } from "next/navigation";

import TresPontinhos from "@/src/components/componentes_simples/TresPontinhos";




// Página de perfil que recebe parâmero pela url;
export default async function Home ( { params }: { params: Promise <{ nomeusuario: string }> }) {
    const { nomeusuario } = await params;

    // Se usuário não existir;
    if (nomeusuario === "nao_existe") { // "nao_existe" está sendo utilizado apenas para vizualização da funcionalidade;
        redirect('/');
    }

    const fotoPerfil = "https://www.bu.edu/files/2024/08/Hey-BU-Blog-Headers-600x392.jpg"; // Imagem de exemplo;
    const contadorPosts = 0; // Valores para exemplo;
    const contadorComentarios = 13;
    const contadorLikes = 10;


    return <>
        <div className = "bloco">
            <section id = "cabecalho-perfil">

                <img id = "foto-perfil" src = { fotoPerfil || "/icones/MediaVirtu_icons/MediaVirtu_icon.png" } alt="" />

                <div id = "infos-rapidas-perfil" >

                    <h2 id = "nome-perfil" className = "goldman-bold" >{ nomeusuario }</h2>

                    <p id = "email-perfil" className = "goldman-regular" >{ "nome.email@dominio.ltd" }</p>


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


            
        </div>
    </>
}