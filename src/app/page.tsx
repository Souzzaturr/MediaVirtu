"use client";

import useAvancaRetornaSessoes from "@/src/hooks/useAvancaRetornaSessoes";

import Shitpost from "../components/inicio/Shitposts";
import LinhaDivisora from "../components/componentes_simples/LinhaDivisora";
import { Fragment } from "react";

import shitposts from "../data/shitposts.json";

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
    { banco_posts.map((post: post, index) =>
    <Fragment key = { index }>
      <Shitpost post = { post }/>
      <LinhaDivisora/>
    </Fragment>
    ) }
  </>
}