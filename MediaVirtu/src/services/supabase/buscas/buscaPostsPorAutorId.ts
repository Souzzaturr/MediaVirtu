"use server";


import { createClient } from "@/src/lib/supabase/server";

// Função que busca lista de shitposts por id do autor do shitpost
export async function buscaPostsPorAutorId (autor_id: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
                            .from("posts")
                            .select(" *, profiles(id, name, avatar) ")
                            .eq("autor_id", autor_id);


    if (error) return { error: "erro ao buscar lista de shitposts desse usuário" }


    return { postsList: data, error: null }
}