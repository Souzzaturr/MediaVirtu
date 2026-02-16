"use client";

// Componentes Next
import Link from "next/link";

// Hooks
import { useControllerAjuda } from "@/src/hooks/useControllerAjuda";



export default function Home () {
    const { textoPesquisa, setTextoPesquisa, opcoesPesquisadas } = useControllerAjuda();

    return <>
        <section className="bloco bloco-ajuda">
        <h2 className = "titulo-ajuda goldman-bold">Precisa de ajuda?</h2>

        <div id = "pesquisa-ajuda">
            <button id = "botao-pesquisa-ajuda" type="submit"><img src="icones/geral/icone-lupa-find-30graus.svg" alt="" height = "90%" /></button>
            <input type="text" name="" id="barra-pesquisa-ajuda" placeholder="Em que podemos lhe ajudar?" value = {textoPesquisa} onChange = {(e) => setTextoPesquisa(e.target.value)} />
        </div>

        <h3 className="goldman-regular">Abaixo está uma lista com os problemas mais comums e que podem lhe ajudar:</h3>


        <div id = "bloco-opcoes-links">
            <div id="lista-opcoes">
                {
                    opcoesPesquisadas.length > 0 ?
                    opcoesPesquisadas.map((opcao) => 
                        <div className="bloco-opcao-ajuda">
                                <Link className = "link-titulo-opcao-ajuda" href = { { pathname: "/Ajuda/Solucao", query: { ...opcao },} }>
                                    <h3 className="titulo_opcao">{ opcao.titulo.length > 50 ? opcao.titulo.slice(0, 50) + "...?" : opcao.titulo }</h3>
                                </Link>     

                                <p className = "conteudo-opcao-ajuda">{ opcao.conteudo.slice(0, 150) + "..." }</p>
                            </div>
                    )
                    : <p>Não conseguimos ajuda-lo? Entre em contado conosco!</p>
                }       

            </div>
            <div id = "links-ajuda">
                <ul>
                    <h4 className = "goldman-bold">Começando</h4>

                    <li>O que é este site?</li>
                    <li>Como Criar uma Conta?</li>
                    <li>Como fazer login?</li>
                </ul>

                <ul>
                    <h4 className="goldman-bold">Conta</h4>

                    <li>Como criar uma conta?</li>
                    <li>Recuperar Senha</li>
                    <li>Alterar email</li>
                    <li>Excluir conta</li>
                </ul>

                <ul>
                    <h4 className="goldman-bold">Funcionalidades principais</h4>

                    <li>Como postar um shitpost?</li>
                    <li>Como fazer comentários em um shitpost?</li>
                    <li>Como enviar menssagens a outras pessoas?</li>
                    <li>Como buscar uma conta?</li>
                </ul>

                <ul>
                    <h4 className="goldman-bold">Solução de problemas</h4>

                    <li>Página não carrega</li>
                    <li>Não consigo verificar email</li>
                    <li>Não consigo enviar menssagens para meus amigos</li>
                </ul>

                <ul>
                    <h4 className="goldman-bold">Perguntas frequentes</h4>

                    <li>Quanto tempo leva para um shitpost ser postado?</li>
                    <li>Posso usar o site sem conta?</li>
                    <li>O site é gratuito?</li>
                </ul>

            </div>
        </div>
    </section>
    </>
}