"use client"


import { useState, useEffect } from "react";

import { customRenderers } from "@/src/utils/markdownCustomRenderers";

import DefaultText from "@/src/components/componentes_simples/DefaultText";
import Select from "@/src/components/forms/Select";
import ReactMarkdown from "react-markdown";

import { getCommitsMediaVirtu } from "@/src/utils/fetch/github";


export default function Novidades() {
    const [ content, setContent ] = useState("Carregando...");
    const [ commits, setCommits ] = useState<any[]>([]);
    const [ contentStatus, setContentStatus ] = useState({ok: false, loading: true, error: false});

    useEffect(() => {
        async function fetchCommits() {
            const response = await getCommitsMediaVirtu();
            if (response.status === 200) {
                setContentStatus({ok: true, loading: false, error: false});
                setCommits(response.body);
                setContent(response.body[0].commit.message);
                return;
            }
            setContentStatus({ok: false, loading: false, error: true});
            setContent("Houve um erro na requisição dos dados dessa página.");
        }
        fetchCommits();
    }, []);

    function changeOptionHandler(e: any) {
        setContent(e.target.value);
    }

    return <>
        <article className="bloco flex flex-col gap-10 h-130" >

            <h1 className="goldman-bold text-3xl text-center" >Novidades</h1>

            <DefaultText classeAdicional="text-center" >Nesta página você pode ver o que chega de novidade em cada update do MediaVirtu.</DefaultText>

            <Select classeAdicional="self-end " onChange={changeOptionHandler} disable={!contentStatus.ok} >
                {
                    !contentStatus.ok ? <option value="">{ contentStatus.loading ? "..." : "Error" }</option> :
                    commits.map((commit, index) => (<option value={commit.commit.message} key={index+"-option"} >{commit.commit.message.split("\n")[0]}</option>))
                }
            </Select>

            <div className="flex flex-col gap-5 indent-10" >
                <ReactMarkdown components={customRenderers} >
                    {(content[0] !== "#" ? "# " : "") + content}
                </ReactMarkdown>
            </div>

        </article>
    </>
}