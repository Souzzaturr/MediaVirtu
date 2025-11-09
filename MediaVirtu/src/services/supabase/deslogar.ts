"use server";


import { createClient } from "@/src/lib/supabase/server";



export async function deslogar () {
    const supabase = await createClient();
    const autenticado = await supabase.auth.getUser();

    if (autenticado) {
        await supabase.auth.signOut();

        return { status: 200 };

    } else {
        return { error: "usuário já está sem autenticação" };
    }
}