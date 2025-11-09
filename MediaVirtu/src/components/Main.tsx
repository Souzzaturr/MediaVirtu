"use client";

import { PopupManager } from "@/src/components/popups/PopupsManager";

import { User } from "@supabase/supabase-js";
import { useAuthStore } from "@/src/store/useAuthStore";
import { createClient } from "@/src/lib/supabase/client";
import { useEffect } from "react";


interface mainProps {
    children: React.ReactNode;
    initialUser: User | null;
}



export function Main ({ children, initialUser }: mainProps ) {
    const setUser = useAuthStore((state) => state.setUser);
    const supabase = createClient();

    useEffect(() => {
        // Sincroniza o estado do Zustand com os dados do SSR
        setUser(initialUser);

        // Escuta mudanças em tempo real (login, logout, token refresh)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        })

        return () => subscription.unsubscribe();
    }, [ initialUser, setUser, supabase ]);


    return <>
    
        {/* Conteúdo principal do site */}
        <main id = "corpo-principal" >
            { children }
        </main>

        <PopupManager />
    
    </>
}