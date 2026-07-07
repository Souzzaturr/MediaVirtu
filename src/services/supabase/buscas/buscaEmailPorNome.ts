"use server";


import { createClient } from "@/src/lib/supabase/server";



// Função para buscar o email de um usuário pelo nome do usuário;
export async function buscaEmailPorNome (nome: string) {
    const supabase = await createClient();


    // Busca no banco de dados, o email de um usuário que tenha o mesmo nome que o nome inserido como argumento;
    const { data, error } = await supabase
                                .from("profiles")
                                .select("email")
                                .eq("name", nome)
                                .single();


    if (error) {
        console.error("Erro ao buscar email de usuários pelo nome");
        console.error("Nome do erro:" + JSON.stringify(error));

        return { error: error }
    }



    return { status: 200, email: data.email }
}