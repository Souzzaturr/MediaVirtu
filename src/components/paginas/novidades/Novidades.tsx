"use client"


import { useState, useEffect, ChangeEventHandler } from "react";

import { customRenderers } from "@/src/utils/markdownCustomRenderers";

import DefaultText from "@/src/components/componentes_simples/DefaultText";
import Select from "@/src/components/forms/Select";
import Markdown from "react-markdown";


export default function Novidades() {
    const [ content, setContent ] = useState("Carregando...");

    function changeOptionHandler(e: any) {
        setContent(e.target.value);
    }

    return <>
        <article className="bloco flex flex-col gap-10 h-130" >

            <h1 className="goldman-bold text-3xl text-center" >Novidades</h1>

            <DefaultText classeAdicional="text-center" >Nesta página você pode ver o que chega de novidade em cada update do MediaVirtu.</DefaultText>

            <Select classeAdicional="self-end" onChange={changeOptionHandler}>
                
            </Select>

            <Markdown components={customRenderers} >
                {content}
            </Markdown>

        </article>
    </>
}