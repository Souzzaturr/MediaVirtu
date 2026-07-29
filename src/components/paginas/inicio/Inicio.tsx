"use client";

import useAvancaRetornaSessoes from "@/src/hooks/useAvancaRetornaSessoes";

import Shitpost from "@/src/components/post/Shitposts";
import LinhaDivisora from "@/src/components/componentes_simples/LinhaDivisora";
import { Fragment } from "react";

import shitposts from "@/src/data/shitposts.json";

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


export default function Inicio() {
  useAvancaRetornaSessoes(".bloco-shitpost");

  return <>
    { banco_posts.map((post: post, index) =>
    <Fragment key = { index }>
      <Shitpost post = { post }/>
      <LinhaDivisora/>
    </Fragment>
    ) }
  </>
}