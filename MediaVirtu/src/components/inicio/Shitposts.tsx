import BotaoGostei from "./BotaoGostei";
import BotaoNaoGostei from "./BotaoNaoGostei";
import BotaoComentarios from "./BotaoComentarios";
import MenuComentarios from "./MenuComentarios";
import TresPontinhos from "../componentes_simples/TresPontinhos";

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
    const texto = post.texto.length > 0 ? <>
        <div className = "conteudo-shitpost">
            { post.texto.split("\n").map((linha: string) => 
                <p>{ linha }</p>
            )}
        </div>
    </> : <></>;

    const imgs = post.imagens.length > 0 ? <>
        <div className = "conjunto-imagens-shitpost">
            { post.imagens.map((endereco: string) => 
                <img className = "imagem-shitpost" src = { endereco } alt = "imagem-shitpost"/>
            )}
        </div>
    </> : <></>;

    return <>
        <section id = { "post-" + post.codigo_post } className = "bloco bloco-shitpost">
            <div className = "topo-shitpost">
                <div className = "autor">
                    <img src = { post.foto_perfil ? post.foto_perfil : "icones/MediaVirtu_icons/MediaVirtu_icon.png" } alt = "foto-perfil" className = "foto-perfil"/>
                    <div className = "info-autor">
                        <h3 className = "nome-autor goldman-bold">{ post.nome }</h3>
                        <p className = "tempo-post">{ post.tempo_postagem }</p>
                    </div>
                </div>
                <TresPontinhos/>
            </div>
            <div className = "principal-shitpost">
                { texto }
                { imgs }
            </div>
            <div className = "painel-interacao-shitpost">
                <div className = "botoes-interacao">
                    <BotaoGostei qtd_likes = { post.likes } codigo_post = { post.codigo_post }/>
                    <BotaoNaoGostei qtd_dislikes = { post.dislikes } codigo_post = { post.codigo_post }/>
                    <BotaoComentarios codigo_post = { post.codigo_post }/>
                </div>
                <MenuComentarios codigo_post = { post.codigo_post }/>
            </div>
        </section>
    </>
} 