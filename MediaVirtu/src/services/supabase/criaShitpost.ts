"use server";

import { createClient } from "@/src/lib/supabase/server";



interface dados {
    descricao: string,
    images: string[]
}


export async function criaShitpost ({ descricao, images }: dados) {
    const supabase = await createClient();


    const { data: user, error: authError } = await supabase.auth.getUser()


    if (authError || !user) return { error: 'usuario nao autenticado', status: 401 };


    const { error: insertError } = await supabase
                            .from("posts")
                            .insert([{ description: descricao, images: images }])
                            .select();


    if (insertError) {
        console.error("Erro ao inserir post:", insertError.message);

        return { error: "Erro ao criar postagem", status: 500 };
    }


    return { success: true, status: 201 };
}