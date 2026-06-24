"use server";

import { createClient } from "@/src/lib/supabase/server";


// Função para realizar cadastro
export async function cadastraUsuario (name: string, email: string, password: string) {
    const supabase = await createClient();

    // Realiza cadastro enviando nome como dado complementar para o banco de dados;
    const { data, error } = await supabase.auth.signUp({ 
                                email,
                                password,
                                options: {
                                    data: {
                                        name: name
                                    }
                                }
                            });

    // Se houver algum erro na criação de usuário, será imprimida uma menssagem no servidor, e retornado um objeto informando código de erro;
    if (error) {
        console.error(`Erro ao cadastrar usuário na função cadastraUsuario(), em src/services/supabase/cadastro.ts`);
        console.error(`Nome do erro: ${JSON.stringify(error)}`);

        return { status: 500, error: error }

    }
    
    // Se o usuário for criado com sucesso, será retornado um objeto informando código de sucesso;
    
    return { status: 200 , data}
}