"use client";


import { createClient } from "@/src/lib/supabase/client";



// Função para fazer upload de imagem para o storage no supabase;

export async function uploadImage (imagem: File, imageName: string) {
    const supabase = createClient();

    const { error } = await supabase.storage
                                .from("shitposts-images")
                                .upload(imageName, imagem);

    if (error) {
        console.error(`Erro no upload: ${error.message}`);
        
        return { error: "erro ao realizar upload" };
    }
    
}