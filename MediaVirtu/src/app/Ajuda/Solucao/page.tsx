"use client";

import Link from "next/link"
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


function SolucaoConteudo() {
    const opcao = useSearchParams();
    const titulo = opcao.get("titulo");
    const conteudo = opcao.get("conteudo");
    const lista_imagens = opcao.getAll("lista_imagens");
    
    return (
        <section className="bloco bloco-solucao">
            <h2 id="titulo-solucao" className="goldman-bold">{titulo}</h2>
            <p id="conteudo-solucao">{conteudo}</p>

            {lista_imagens.length > 0 && (

                <div id="bloco-imagens-solucao">
                    {lista_imagens.map((endereco, index) => 
                        <img key={index} src={endereco} height="300px" alt="Solução"/>
                    )}
                </div>

            )}

            <Link id="botao-voltar-solucao" href="/Ajuda">
                <p className="goldman-bold">Voltar</p>
            </Link>
            
        </section>
    );
}


export default function Home() {
    return (
        <Suspense fallback={<p>Carregando...</p>}>
            <SolucaoConteudo />
        </Suspense>
    );
}
