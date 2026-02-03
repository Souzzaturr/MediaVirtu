"use client";




export function Main ({ children }: { children: React.ReactNode }) {


    return <>
    
        {/* Conteúdo principal do site */}
        <main id = "corpo-principal" >
            { children }
        </main>
    
    </>
}