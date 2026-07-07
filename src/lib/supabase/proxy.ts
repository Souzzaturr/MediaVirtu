// Cliente supabase para servidor, específico para arquivos proxy;

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";



// Cria cliente supabase server específico para arquivo proxy;
export async function updateSession ( request: NextRequest ) {
    let response = NextResponse.next({
        request: { headers: request.headers },
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
        cookies: {
            getAll() {
                return request.cookies.getAll();
            },
            setAll(cookiesToSet) {
            // Atualiza os cookies na requisição para que o código subsequente os veja
                cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
            
            // Atualiza os cookies na resposta enviada ao navegador
            response = NextResponse.next({
                request: { headers: request.headers },
            });
            cookiesToSet.forEach(({ name, value, options }) =>
                response.cookies.set(name, value, options)
            );
          },
        },
      }
    );


    await supabase.auth.getUser();


    return { supabase, response }
}