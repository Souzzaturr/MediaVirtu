import { SYSTEM_CONFIG } from "@/src/globals/config";

import { Metadata } from "next";

import Perfil from "@/src/components/paginas/perfil/Perfil";


// Função para definir metadados;
export async function generateMetadata ( { params }: { params: Promise <{ nomeusuario: string }> }): Promise<Metadata> {
    const { nomeusuario } = await params;


    return {
        title: `Perfil de ${ nomeusuario } | ${ SYSTEM_CONFIG.name }`,
        description: `Veja os posts e amigos de ${ nomeusuario } na nossa plataforma!!`,
        openGraph: {
            images: [SYSTEM_CONFIG.logoPrincipal,]
        },
    }
}



// Página de perfil que recebe parâmero pela url;
export default async function Home ( { params }: { params: Promise <{ nomeusuario: string }> }) {
    const { nomeusuario } = await params;
    
    return <Perfil userName={nomeusuario} />
}