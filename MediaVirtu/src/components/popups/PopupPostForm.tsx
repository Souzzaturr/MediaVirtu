"use client";

import { usePopupStore } from "@/src/store/usePopupStore";

import { uploadImage } from "@/src/services/supabase/envios/uploadImage";
import { buscaUrlImagem } from "@/src/services/supabase/buscas/buscaUrlImagem";
import { criaShitpost } from "@/src/services/supabase/criaShitpost";


import React, { useState, useTransition } from "react";



interface ImageItem {
  id: number;
  type: 'url' | 'file';
  url: string;
  file?: File;
  name?: string;
}



export function PopupPostForm () {
    const [ descricao, setDescricao ] = useState("");
    const [images, setImages] = useState<ImageItem[]>([]);
    const [urlInput, setUrlInput] = useState('');
    const [ isPending, startTransition ] = useTransition();
    
    const show = usePopupStore((state) => state.popupPostForm.show);
    const fecharPopup = usePopupStore((state) => state.closePopupPostForm);
    const popupMenssagem = usePopupStore((state) => state.setPopupMenssagem);

    



    // Faz o upload das imagens e troca url das imagens tipo file para a url de lá do storage no supabase;
    const enviaShitPost = async () => {
        try {

            for (let i = 0; i < images.length; i++) {
                if (images[i].type === "file") {
                // Espera cada upload terminar antes de ir para o próximo
                    await uploadImage(images[i].file!, images[i].name!);
                    images[i].url = await buscaUrlImagem(images[i].name!);
                }
            }
            
            // Cria shitpost após o fim do upload das imagens;
            const { success } = await criaShitpost({ descricao: descricao, images: images.map((image) => image.url) });
            
            
            if (!success) throw new Error("Erro na criação de shitpost");
            
            
            popupMenssagem({ titulo: "Shitpost enviado com sucesso!", menssagem: "Seu Shitpost foi criado com sucesso, e em instantes aparecerá no feed principal!!" })

        } catch {
            popupMenssagem({ titulo: "Não foi possível criar o shitpost :(", menssagem: "Parece que houve um problema na criação do seu shitpost, por favor, tente novamente mais tarde!" })
        }

    }



    

    // Função para fechar popup quando for clicado fora dele;
    const clickFora = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.id === "fundo-popup-form-post") fecharPopup()
    }



    const pegaValorDescricao = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;

        setDescricao(value);
    }

    

    // Adicionar via URL
    const addImageUrl = () => {
        if (urlInput.trim()) {
        setImages([...images, { id: Date.now(), type: 'url', url: urlInput }]);
        setUrlInput('');
        }
    };

    // Adicionar via Upload
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {

            const objectUrl = URL.createObjectURL(file);
            setImages([...images, { id: Date.now(), type: 'file', url: objectUrl, file: file, name: `${Date.now()}-${file.name}` }]);

        e.target.value = ''; // Limpa o input de arquivo
    }
    };

    // Remover imagem
    const removeImage = (id: number) => {
        setImages(images.filter(img => img.id !== id));
    };


    
    // Envia dados para o supabase e limpa o formulario;
    const enviaDados = () => {
        if (descricao || images.length > 0) {
            // Inicia envio do ShitPost para o banco de dados
            startTransition(enviaShitPost);

            // Limpa e fecha o Popup
            setDescricao("");
            setImages([]);
            setUrlInput("");
            fecharPopup();

        } else {
            popupMenssagem({ titulo: "Post vazio...", menssagem: "Insira ao menos uma descrição, ou envie pelo menos uma imagem!" });
        }

    };





    return <>
        <div id="fundo-popup-form-post" className = { show ? "" : "esconder" } onClick = { clickFora } >
            <div id="corpo-popup-form-post" className = "rgb-border-fade">
                
                
                
                <h1 className = "goldman-bold"> ShitPost - Creator </h1>



                <div className="campo-descricao-shitpost">

                    <label htmlFor = "" className = "goldman-regular label-shitpost-form-campos" >Descrição do shitpost</label>

                    <textarea name = "descricao_shitpost" id = "descricao-shitpost" className = "" value = { descricao } onChange = { pegaValorDescricao } onBlur = { () => {} } placeholder = "Qual a gracinha de hoje?" ></textarea>

                </div>


                <h3 className = "goldman-regular label-shitpost-form-campos" >Imagens</h3>



                <div id = "entrada-imagens-forms" >
      
                {/* 1. LISTA DE IMAGENS (PREVIEW) */}
                <div id = "lista-imagens">
                    {images.map((img) => (
                    <div className = "bloco-imagem-salva" key={img.id} >
                        <img 
                        className = "imagem-salva"
                        src={img.url} 
                        alt="Preview" 
                        />
                        <button 
                        className = "botao-remover-imagem-salva"
                        onClick={() => removeImage(img.id)}
                        >
                        X
                        </button>
                    </div>
                    ))}
                </div>




                {/* 2. INPUTS (ABAIXO) */}
                <div id = "inputs-url-upload-imagem" >
                    {/* Input de URL */}
                    <div id = "campo-input-url">
                        <input
                            id = "input-url"
                            type="text" 
                            placeholder="Cole a URL da imagem aqui..."
                            value={ urlInput }
                            onChange={(e) => setUrlInput(e.target.value)}
                        />


                        <button className = "botao-fundo-transparente" onClick={addImageUrl} >
                            Adicionar
                        </button>

                    </div>


                        {/* Input de Upload */}
                    <div  id = "container-input-upload-imagem">
                        <label id = "label-input-upload-imagem">
                            Clique para Upload de Imagem
                            <input id = "input-upload-imagem" type="file" accept="image/*" onChange={ handleUpload } />
                        </label>
                        </div>
                    </div>
                </div>


            
            <button className = "botao-fundo-transparente" onClick = { enviaDados } disabled = { isPending } >Postar</button>

            </div>
        </div>
    </>
}