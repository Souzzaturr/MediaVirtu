"use server";

import { createClient } from "@/src/lib/supabase/server";
import { buscaEmailPorNome } from "@/src/services/supabase/buscas/buscaEmailPorNome";
// import { redirect } from "next/navigation"; // importar quando precisar redirecionar


// Função para realizar login de usuário, recebendo email e senha;
export async function logaUsuario (email: string, password: string) {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    // Se login não for feito com sucesso, retorna status 401 (Unauthorized);
    if (error) return { status: 401, error: error }

    // Se login for realizado com sucesso, é retornado status code de sucesso;
    return { status: 200, data }
}





// Função para realizar login com nome e senha;
export async function logaUsuarioComNome (nome: string, senha: string) {
    const supabase = await createClient();

    
    const { email, error } = await buscaEmailPorNome(nome);


    // Se buscaEmailPorNome retornar algum erro;
    if (error) {
        console.error("Erro ao buscar nome na função \"buscaemailPorNome()\" no arquivo src/services/supabase/buscas/buscaEmailPorNome.ts");
        console.error("Erro: " + JSON.stringify(error));

        return { error: error }
    }


    // Realiza login do usuário;
    const response = await supabase.auth.signInWithPassword({ email: email, password: senha });


    // Se houver algum erro com o login;
    if (response.error) {
        console.error("Erro ao logar usuário na função \"logaUsuarioComNome()\" no arquivo src/services/supabase/login.ts")
        console.error("Erro: " + JSON.stringify(response.error));

        return { error: response.error }
    }



    return { status: 200 }
}