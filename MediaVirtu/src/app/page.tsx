"use client";

import useAvancaRetornaSessoes from "../hooks/useAvancaRetornaSessoes";

import Shitpost from "../components/inicio/Shitposts";
import LinhaDivisora from "../components/componentes_simples/LinhaDivisora";
import shitposts from "../data/shitposts.json";

import embaralharArray from "../utils/embaralharArray";

export interface post {
  nome: string,
  foto_perfil: string,
  tempo_postagem: string,
  texto: string,
  imagens: string[],
  likes: number,
  dislikes: number,
  codigo_post: string
}

const banco_posts = shitposts;


export default function Home () {
  useAvancaRetornaSessoes();

  return <>
    { embaralharArray(banco_posts).map((post: post) =>
    <>
      <Shitpost key = { post.codigo_post } post = { post }/>
      <LinhaDivisora/>
    </>
    ) }
  </>
}