"use server";

import { createClient } from "@/src/lib/supabase/server";
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