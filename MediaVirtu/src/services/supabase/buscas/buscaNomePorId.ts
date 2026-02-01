"use server";

import { createClient } from "@/src/lib/supabase/server";

// Função que recebe id do usuário atual e retorna nome do usuário atual;
export async function buscaNomePorId (id: string) {
    const supabase = await createClient();

    const { data } = await supabase
                                .from("profiles")
                                .select("name")
                                .eq("id", id)
                                .single();



    return data?.name
}