

import { useState, useEffect } from "react";
import lista_opcoes from "@/src/app/Ajuda/ajuda_opcoes.json";



interface opcao {
    titulo: string;
    conteudo: string;
    lista_imagens: string[];
    tags: string[];
};



export const useControllerAjuda = () => {
    
    const [textoPesquisa, setTextoPesquisa] = useState("");
    const [opcoesPesquisadas, setOpcoesPesquisadas] = useState<opcao[]>([]);
    

    // Filtro de opções de ajuda
    useEffect(() => {
        setOpcoesPesquisadas(
            textoPesquisa == "" ? lista_opcoes :
            lista_opcoes.filter((opcao: opcao) =>
                textoPesquisa.split(' ').some((palavra) => opcao.tags.includes(palavra.toLowerCase()))
            )
        )
    }, [textoPesquisa]);


    return { textoPesquisa, setTextoPesquisa, opcoesPesquisadas }
}