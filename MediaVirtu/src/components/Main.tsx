"use client";

import { PopupManager } from "@/src/components/popups/PopupsManager";


export function Main ({ children }: { children: React.ReactNode }) {


    return <>
    
        {/* Conteúdo principal do site */}
        <main id = "corpo-principal" >
            { children }
        </main>

        <PopupManager />
    
    </>
}