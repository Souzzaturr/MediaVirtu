"use server";


import { createClient } from "@/src/lib/supabase/server";



export async function buscaPerfilPorNome (nome: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
                                .from("profiles")
                                .select()
                                .eq("name", nome)
                                .single();


    return { data, error };
}