// Porteiro da aplicação :)
// Toda rota que o usuário quer acessar, passa por aqui antes de ser renderizada para o usuário
// Dependendo da condição estabelecida, o proxy é capaz de bloquear o acesso de uma página específica a um tipo de usuário específico.

import { updateSession } from "@/src/lib/supabase/proxy";
import * as Routes from "@/src/lib/proxy/routes"
import { NextResponse, type NextRequest } from "next/server";

import { buscaNomePorId } from "@/src/services/supabase/buscas/buscaNomePorId";



export async function proxy ( request: NextRequest ) {
    const { supabase, response } = await updateSession(request);
    const { data: { user } } = await supabase.auth.getUser();

    // Pega rota que o usuário quer acessar;
    const CURRENT_PATH = request.nextUrl.pathname;

    
    // Rota acessível apenas para usuários não autenticados;
    if (user && Routes.QUEST_ROUTES.some((url) => CURRENT_PATH.startsWith(url))) {

        return NextResponse.redirect(new URL('/', request.url));
    }
    


    // Rota pública, porém, sem argumentos, o valor padrão se torna o nome do usuário se ele estiver autenticado (Se não estiver autenticado e não especificar um parâmetro de rota, será enviado de volta para o início);
    if (CURRENT_PATH === "/Perfis") {
        if (user) return NextResponse.redirect(new URL('/Perfis/' + await buscaNomePorId(user.id), request.url));

        return NextResponse.redirect(new URL('/Acesso/Cadastro', request.url));
    }



    // Retorna resposta HTTP e cookies atualizados para o navegador;
    return response
}





// Configurações para o proxy
export const config = {
    // Evita que o proxy tente verificar o usuário toda vez que o navegador solicitar um arquivo estático (como imagens), economizando performance;
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)']
}
