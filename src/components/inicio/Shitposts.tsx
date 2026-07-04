import BotaoGostei from "./BotaoGostei";
import BotaoNaoGostei from "./BotaoNaoGostei";
import BotaoComentarios from "./BotaoComentarios";
import MenuComentarios from "./MenuComentarios";
import TresPontinhos from "../componentes_simples/TresPontinhos";
import { comparaTempo } from "@/src/utils/tempo/comparaTempo";
import Link from "next/link";

interface post {
    nome: string;
    foto_perfil: string;
    tempo_postagem: string;
    texto: string;
    imagens: string[];
    likes: number;
    dislikes: number;
    codigo_post: string;
}

interface props {
    post: post;
}

export default function Shitpost ({post}: props) {

    const tempoPostagem = "Há " + comparaTempo(post.tempo_postagem) + " atrás";

    return <>        
        
        <article id={ "post-" + post.codigo_post } className="bloco bloco-shitpost">
            
            <div className="corpo-shitpost">

                <section className="cabecalho-shitpost">
            
                    <div className="autor-info">
                    
                        <img src = { post.foto_perfil ? post.foto_perfil : "icones/MediaVirtu_icons/MediaVirtu_icon.png" } alt = "foto-perfil" className = "foto-perfil"/>

                        <div>
                            <Link href={ "/Perfis/" + post.nome } className="link-branco">
                                <h3 className="goldman-bold">{ post.nome }</h3>
                            </Link>

                            <p className="text-xs">{ tempoPostagem !== "Há NaN segundo atrás" ? tempoPostagem : post.tempo_postagem }</p>

                        </div>

                    </div>

                    <TresPontinhos/>
                
                </section>
            
                <section className="conteudo-shitpost">
                
                    <div className="texto-shitpost">                    
                        { post.texto.length > 0 && post.texto.split("\n").map((linha: string, index) => 
                            <p key = { index } >{ linha }</p>
                        )}                    
                    </div>

                    <div className="conjunto-imagens-shitpost">
                        { post.imagens.length > 0 && post.imagens.map((endereco: string, index) => 
                            <img className = "imagem-shitpost" key = {index} src = { endereco } alt = "imagem-shitpost"/>
                        )}                    
                    </div>
                
                </section>


            </div>

            <section className="sessao-comentarios flex justify-center items-center">
            
                <MenuComentarios codigo_post={ post.codigo_post } classeAdicional = "hideOnMobile" />

                <BotaoComentarios classeAdicional = "hideOnDesktop  self-end" codigo_post = {post.codigo_post} />
            
            </section>
        
        </article>        
       
    </>
} 