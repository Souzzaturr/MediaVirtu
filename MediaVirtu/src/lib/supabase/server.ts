import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers.js';


// Função para criar um cliente supabase no lado do servidor
export async function createClient() {
  const cookieStore = await cookies()                                             // Acessa os cookies do Next.js

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {                                                            // Configura cookies
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            console.warn("Erro nos cookies do createServerClient()");
          }
        },
      },
    }
  )
}