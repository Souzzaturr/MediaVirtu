"use server";

import { createClient } from "@/src/lib/supabase/server";



// Função para buscar URL da imagem no Storage do supabase, por nome do arquivo;

export async function buscaUrlImagem (imageName: string) {
    const supabase = await createClient();

    const { data: { publicUrl } } = await supabase.storage
                                            .from("shitposts-images")
                                            .getPublicUrl(imageName);


    return publicUrl
}