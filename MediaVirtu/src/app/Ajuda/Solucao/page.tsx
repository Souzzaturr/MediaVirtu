"use client";

import Link from "next/link"
import { useSearchParams } from "next/navigation";

export default function Home () {

    const opcao = useSearchParams();
    const titulo = opcao.get("titulo");
    const conteudo = opcao.get("conteudo");
    const lista_imagens = opcao.getAll("lista_imagens");
    
    return <>
            <section className = "bloco bloco-solucao">
                <h2 id = "titulo-solucao" className = "goldman-bold">{ titulo }</h2>

                <p id = "conteudo-solucao">{ conteudo }</p>

                {
                    lista_imagens.length == 0 ? <></> :
                    <div id = "bloco-imagens-solucao">
                        { lista_imagens.map((endereco) => 
                            <img src = {endereco} height = "300px"/>
                        ) }
                    </div>
                }

                <Link id = "botao-voltar-solucao" href = "/Ajuda"><p className = "goldman-bold">Voltar</p></Link>
            </section>
    </>
}