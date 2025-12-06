"use client";

import Shitpost from "./Shitposts";
import LinhaDivisora from "../componentes_simples/LinhaDivisora";
import shitposts from "../../data/shitposts.json";

import embaralharArray from "../../utils/embaralharArray";

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


export default function Inicio () {
  return <>
    { embaralharArray(banco_posts).map((post: post) =>
    <>
      <Shitpost key = { post.codigo_post } post = { post }/>
      <LinhaDivisora/>
    </>
    ) }
  </>
}