"use client"


import banco_comentarios from "@/src/data/comentarios.json";

import { onlyThisCharInString } from "@/src/utils/string/stringContent";

import { usePopupStore } from "@/src/store/usePopupStore";
import { useAuthStore } from "@/src/store/useAuthStore";

import TextArea from "@/src/components/forms/TextArea";
import DefaultButton from "@/src/components/buttons/DefaultButton";
import MensagemSimplesFormModal from "@/src/components/modal/modelos_de_conteudo/MensagemSimplesFormModal";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";


interface comentario {
    autor: string,
    para_post: string,
    conteudo: string
}

interface props {
    codigo_post: string,
    classeAdicional?: string | ""
}


export default function MenuComentarios ({codigo_post, classeAdicional}: props) {
    const [showTextAreaComentar, setShowTextAreaComentar] = useState(false);
    const [textareaCommentValue, setTextareaCommentValue] = useState("");
    const [showSendComment, setShowSendComment] = useState(false);
    const textareaComentarRef = useRef<HTMLTextAreaElement>(null);
    const botaoEnviarComentarioRef = useRef<HTMLButtonElement>(null);
    const router = useRouter();
    const user = useAuthStore((state) => state.user);
    const setModal = usePopupStore((state) => state.setModal);
    const fecharModal = usePopupStore((state) => state.closeModal);
    const classe = "bloco-comentarios" + " " + classeAdicional;

    const lista_comentarios = banco_comentarios.filter((comentario: comentario) =>
        comentario.para_post === codigo_post
    )

    useEffect(() => {
        setShowSendComment(textareaCommentValue.length > 0 && !onlyThisCharInString(textareaCommentValue, ["\n", " "]));
    }, [textareaCommentValue])

    useEffect(() => {
        if (!showTextAreaComentar || !textareaComentarRef.current || !botaoEnviarComentarioRef.current) return;

        const textarea = textareaComentarRef.current;

        textarea.focus();
    
        function hideTextarea(e: any) {
            if (showTextAreaComentar && e.target.classList[1] !== "textareaComentar" && textarea.value.length === 0) {
                setShowTextAreaComentar(false);
                
                document.removeEventListener("click", hideTextarea);
            }
        }

        document.addEventListener("click", hideTextarea);

        return () => {
            document.removeEventListener("click", hideTextarea);
        }

    }, [showTextAreaComentar])

    function sendComment() {
        if (!user) {
            setModal(
                <MensagemSimplesFormModal titulo="Conta necessária"
                    mensagem={`Você precisa de uma conta para poder comentar em um post!
                    Deseja ir para a página de cadastro?`}
                    simFunction={() => {
                        router.push("/acesso/cadastro");
                        fecharModal();
                    }}
                    naoFunction={fecharModal}
                 />
            )
        }
    }

    return <>
        <section id = { "bloco-comentarios " + codigo_post } className = {classe}>
            <div className="flex flex-col overflow-y-scroll h-[100%]" >
                { lista_comentarios.length === 0 ?
                    <p className = "sem-comentarios self-center ">Ninguem comentou nada ainda...</p> :
                    
                    lista_comentarios.map((comentario: comentario, index) => 
                        <div className = "bloco-comentario !py-1" >
                            <p key = {index} className = "texto-comentario text-sm ">{comentario.autor}: {comentario.conteudo}</p>
                        </div>
                    )
                }
            </div>

            <div className = "absolute self-center bottom-[3px] w-[90%] overflow-hidden rounded-[10px]">
                <div className="regular flex justify-center" >
                    <TextArea ref={textareaComentarRef} className="textareaComentar" value={textareaCommentValue} resize={false} onChange={(e) => setTextareaCommentValue(e.target.value)} maxLines={5} ></TextArea>

                    <DefaultButton 
                    ref={botaoEnviarComentarioRef} className={"absolute !min-w-[40px] !min-h-[40px] bottom-2 !bg-white hover:!bg-gray-300 hover:!border-gray-300 transition-[right] duration-300 " + (showSendComment ? "right-[6px]" : "right-[-50px]")} onClick={sendComment} >
                        <img className="max-w-[30px] pointer-events-none" src="icones/envio/icon-send-60px-black.png" alt="" />
                    </DefaultButton>

                    <DefaultButton className={"absolute goldman-bold self-center !w-[100%] h-[58px] !bg-black hover:!bg-white active:!bg-gray-300 transition-[bottom] duration-300 " + (showTextAreaComentar ? "bottom-[-60px]" : "bottom-[0px]")} onClick={() =>setShowTextAreaComentar(true)} >Escreva um comentário:</DefaultButton>
                </div>
            </div>
        </section>
    </>
}