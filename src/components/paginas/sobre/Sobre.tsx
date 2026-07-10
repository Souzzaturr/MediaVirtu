"use client"


import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import { getReadmeMediaVirtu } from "@/src/utils/fetch/github";
import { decodeBase64 } from "@/src/utils/base64";
import { customRenderers } from "@/src/utils/markdownCustomRenderers";

import adms_supremos from "./adms_supremos.json";
import CardAdmSupremo from "./CardAdmSupremo";


export default function Sobre () {
    const [ descricao, setDescricao ] = useState("Carregando...");

    useEffect(() => {
        async function fetchDescricao() {
            const response = await getReadmeMediaVirtu();
            if (response.status === 200) {
                setDescricao(decodeBase64(response.body.content));
                return;
            }
            setDescricao("Ocorreu um erro ao buscar a descrição.");
        }
        fetchDescricao();
    }, []);

    return <>
    <section className = "bloco bloco-sobre">
        <h2 className = "titulo-sobre goldman-bold"> Sobre o MediaVirtu </h2>

        <div className = "texto-sobre">
            <ReactMarkdown components={customRenderers} >
                { descricao }
            </ReactMarkdown>
        </div>
        
        <h3 className = "goldman-bold">Desenvolvedores:</h3>

        <div className = "cards-adms-supremos">
            { adms_supremos.map((adm) => <CardAdmSupremo key = { adm.nome } adm = { adm }/>) }
        </div>

        <h4 className = "goldman-regular">©MediaVirtu Todos os Direitos Reservados</h4>
    </section>
    </>
}


function texto (texto: string) {
    // return texto ? texto.split('\n').map((linha) => '<p>' + linha + '</p>') : '';
    
}