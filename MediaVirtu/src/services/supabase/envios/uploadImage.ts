"use server";


import { createClient } from "@/src/lib/supabase/server";



// Função para fazer upload de imagem para o storage no supabase;

export async function uploadImage (imagem: File, imageName: string) {
    const supabase = await createClient();

    const { error } = await supabase.storage
                                .from("shitposts-images")
                                .upload(imageName, imagem);

    if (error) {
        console.error(`Erro no upload: ${error.message}`);
        console.error("./src/services/supabase/storage/uploadImage.ts");
        
        return { error: "erro ao realizar upload" };
    }
    
}