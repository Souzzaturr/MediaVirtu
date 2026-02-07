import { createClient } from "@/src/lib/supabase/client";



// Função para buscar URL da imagem no Storage do supabase, por nome do arquivo;

export function buscaUrlImagem (imageName: string) {
    const supabase = createClient();

    const { data: { publicUrl } } = supabase.storage
                                            .from("shitposts-images")
                                            .getPublicUrl(imageName);


    return publicUrl
}