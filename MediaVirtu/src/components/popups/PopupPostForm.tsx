"use client";

import React, { useState } from "react";



interface ImageItem {
  id: number;
  type: 'url' | 'file';
  content: string;
}



export function PopupPostForm () {
    const [ descricao, setDescricao ] = useState("");
    const [images, setImages] = useState<ImageItem[]>([]);
    const [urlInput, setUrlInput] = useState('');
    const [ hide, setHide ] = useState(false);


    const esconder = () => {
        setHide(true)

        setTimeout(() => setHide(false), 1500)
    }


    const pegaValorDescricao = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;

        setDescricao(value);
    }

    

    // Adicionar via URL
    const addImageUrl = () => {
        if (urlInput.trim()) {
        setImages([...images, { id: Date.now(), type: 'url', content: urlInput }]);
        setUrlInput('');
        }
    };

    // Adicionar via Upload
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        const objectUrl = URL.createObjectURL(file);
        setImages([...images, { id: Date.now(), type: 'file', content: objectUrl }]);
        e.target.value = ''; // Limpa o input de arquivo
        }
    };

    // Remover imagem
    const removeImage = (id: number) => {
        setImages(images.filter(img => img.id !== id));
    };



    // Exibir na tela informações das imagens salvas (para fins de melhor vizualização dos dados por desenvolvedores)
    // Função será removira quanto popup se integrar com Store;
    const exibee = () => {
        alert(JSON.stringify(images))
    }




    return <>
        <div id="fundo-popup-form-post" className = { hide ? "esconder" : "" } >
            <div id="corpo-popup-form-post" className = "rgb-border-fade">
                
                
                
                <h2 className = "goldman-bold"> ShitPost - Creator </h2>



                <div className="campo-descricao-shitpost">

                    <label htmlFor = "" className = "goldman-regular label-shitpost-form-campos" >Descrição do shitpost</label>

                    <textarea name = "descricao_shitpost" id = "descricao-shitpost" className = "" value = { descricao } onChange = { pegaValorDescricao } onBlur = { () => {} } placeholder = "" ></textarea>

                </div>


                <h3 className = "goldman-regular label-shitpost-form-campos" >Imagens</h3>



                <div id = "entrada-imagens-forms" >
      
                {/* 1. LISTA DE IMAGENS (PREVIEW) */}
                <div id = "lista-imagens">
                    {images.map((img) => (
                    <div className = "bloco-imagem-salva" key={img.id} >
                        <img 
                        className = "imagem-salva"
                        src={img.content} 
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


            
            <button className = "botao-fundo-transparente" onClick = { exibee } >Enviar</button>

            </div>
        </div>
    </>
}