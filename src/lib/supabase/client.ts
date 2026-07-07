import { createBrowserClient } from "@supabase/ssr";

// Função para criar um cliente supabase no lado do navegador
export function createClient () {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
}