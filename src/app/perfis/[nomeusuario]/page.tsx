
import { Metadata } from "next";

import Perfil from "@/src/components/paginas/perfil/Perfil";


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
    
    return <Perfil userName={nomeusuario} />
}