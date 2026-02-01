
import { redirect } from "next/navigation";





// Página de perfil que recebe parâmero pela url;
export default async function Home ( { params }: { params: Promise <{ nomeusuario: string }> }) {
    const { nomeusuario } = await params;

    // Se usuário não existir;
    if (nomeusuario === "nao_existe") { // "nao_existe" está sendo utilizado apenas para vizualização da funcionalidade;
        redirect('/');
    }


    return <>
        <div className="bloco">
            <p>{ nomeusuario }</p>
        </div>
    </>
}