"use server";


import { cadastraUsuario } from "@/src/services/supabase/cadastro";
import { logaUsuario } from "@/src/services/supabase/login";
//import { deslogar } from "@/src/services/supabase/deslogar";



export async function cadastraELoga (nome: string, email: string, senha: string) {
    // Realiza cadastro;
    const { data, error } = await cadastraUsuario(nome, email, senha);

    // Se houver erro;
    if (error) {

        // Retorna objeto com erros;
        return { name_error: "Erro ao cadastrar usuário", status: 500, error: error }
    }

    // Loga usuario;
    await logaUsuario(email, senha);

    // retorna obejto com status de sucesso;
    return { status: 200, data};
}