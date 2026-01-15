"use client";

import { verificaNomeUsuario, verificaEmail, verificaSenha } from "../../../utils/verifica_campos_formulario";

import { useState } from "react";
import Link from "next/link";

// Objeto guardando valores vazios para cada campo do formulário;
const form_empty = {
    nome_usuario: "",
    email_usuario: "",
    senha_usuario: ""
}

// Objeto guandando valores booleanos que representam se um campo do formulário está preenchido corretamente
const valid_fields_default = {
    nome_usuario: true,
    email_usuario: true,
    senha_usuario: true
}

export default function Home () {
    // State para guardar valores inseridos no formulário;
    const [ formValues, setFormValues ] = useState(form_empty);
    // State para guardar valores booleanos representando se cada campo está preenchido corretamente (true) ou nao (false);
    const [ validFields, setValidFields ] = useState(valid_fields_default);
    // State para guardar o input a ser exibido (nome/email);
    const [ nome_or_email, set_nome_or_email ] = useState("nome");
    // State para guardar se o cursor está em cima do botão de alterar o State nome_or_email
    const [ mouseInBotaoMuda_nome_or_email, setMouseInBotaoMuda_nome_or_email ] = useState(false);
    // State para guardar se a senha deve ser exibida (true) ou não (false)
    const [ showPassword, setShowPassword ] = useState(false);


    // Função para alterar valores dos campos do formulário recebendo como parâmetro um evento que aponta para o elemento (input) que o ativou, dando acesso as propriedades desse elemento;
    const mudaValoresForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormValues((prevState) => ({...prevState, [ name ]: value}));
    }

    // Função criada para melhorar leitura do botão de mudar nome-email
    const mudaCampo_nome_email = () => {
        set_nome_or_email((prevState) => prevState === "nome" ? "email" : "nome");
    }

    // Função para verificar se nome de usuário inserido tem formato válido;
    const verificarNome = () => {
        setValidFields((prevState) => ({...prevState, nome_usuario: formValues.nome_usuario === "" ? true : verificaNomeUsuario(formValues.nome_usuario)}))
    }
    
    // Função para verificar se email inserido tem formato válido;
    const verificarEmail = () => {
        setValidFields((prevState) => ({...prevState, email_usuario: formValues.email_usuario === "" ? true : verificaEmail(formValues.email_usuario)}))
    }

    // Função para verifcr se senha tem tamanho valido e não contém espaços
    const verificarSenha = () => {
        setValidFields((prevState) => ({...prevState, senha_usuario: formValues.senha_usuario === "" ? true : verificaSenha(formValues.senha_usuario)}))
    }

    // Função para limpar todos os campos do formulario e resetar o validFields, removendo menssagens de incorreto;
    const limpaForms = () => {
        setFormValues(form_empty);
        setValidFields(valid_fields_default);
    }

    // Função para analisar campos preenchidos e enviar dados
    const enviaDados = (event: MouseEvent) => {
        event.preventDefault();

        // Define chave_nome_or_email como sendo uma chave válida de formValues e validFields
        type chavesForm = keyof typeof formValues | keyof typeof validFields;
        const chave_nome_or_email = nome_or_email + "_usuario" as chavesForm

        // Se o email/nome ou a senha estiverem vazios
        if (formValues[chave_nome_or_email] === "" || formValues.senha_usuario === "") {
            window.alert("todos os campos devem ser preenchidos!!");

        // Se o email/nome ou a senha estiverem incorretos
        } else if (!validFields[chave_nome_or_email] || !validFields.senha_usuario) {
            window.alert("Todos os campos devem ser preenchidos corretamente!!");

        // Tudo ok
        } else {
            window.alert("Login pode ser realizado com sucesso!!");
        }
    }



    return <>
        <div className="bloco">
            <h2 className="titulo-form goldman-bold">É um veterano por aqui?</h2>
            <p className="texto-acesso">Faça login e volte a aproveitar o melhor do MediaVirtu!</p>

            <div id="container-formulario-imagem">
                <form className = "formulario-acesso" action="">
                    <div className="campo-acesso">

                        {nome_or_email === "nome" ?

                            <><label htmlFor="nome-usuario" className = { validFields.nome_usuario ? "" : "menssagem-campo-incorreto" }>Nome de usuário { validFields.nome_usuario ? "" : "inválido" }</label>
                            <input type="text" name = "nome_usuario" id = "nome-usuario" className = {"campo-formulario " + (validFields.nome_usuario ? "" : "campo-incorreto")} value = { formValues.nome_usuario } onChange = { mudaValoresForm } onBlur = { verificarNome } placeholder = "Seu nome de usuário aqui" />
                            { validFields.nome_usuario ? <></> : <p className = "menssagem-campo-incorreto">Nomes de usuário tem de 5 a 20 caracteres e possuem apenas letras números e underline "_"</p>}
                            </>

                        :

                            <><label htmlFor="email-usuario" className = { validFields.email_usuario ? "" : "menssagem-campo-incorreto" }>Email { validFields.email_usuario ? "" : "não segue o formato correto" }</label>
                            <input type="email" name="email_usuario" id="email-usuario" className = {"campo-formulario " + (validFields.email_usuario ? "" : "campo-incorreto")} value = { formValues.email_usuario } onChange = { mudaValoresForm } onBlur = { verificarEmail } placeholder = "Seu email aqui" />
                            { validFields.email_usuario ? <></> : <p className="menssagem-campo-incorreto">Email deve seguir o seguinte formato: seunome@dominio.tld</p> }
                            </>
                        }

                    </div>

                    <div className="botao-mudar-nome-email">
                        <button type = "button" className="botao-fundo-transparente" onClick = { mudaCampo_nome_email } onMouseEnter = { () => setMouseInBotaoMuda_nome_or_email(true) } onMouseOut = { () => setMouseInBotaoMuda_nome_or_email(false) } >Entrar com { nome_or_email === "nome" ? "email" : "nome" } <img id = "imagem-botao-mudar-nome-email" src = { "/icones/geral/setas-ciclo/icone-setas-ciclo-" + (mouseInBotaoMuda_nome_or_email ? "preta" : "branca") + ".png" } alt = "" height = "15px"/></button>
                    </div>

                    <div className="campo-acesso">
                        <label htmlFor="senha-usuario" className = { validFields.senha_usuario ? "" : "menssagem-campo-incorreto" }>Senha { validFields.senha_usuario ? "" : "inválida" }</label>
                        <input type={ showPassword ? "text" : "password" } name="senha_usuario" id="senha-usuario" className = {"campo-formulario " + (validFields.senha_usuario ? "" : "campo-incorreto")} value = { formValues.senha_usuario } onChange = { mudaValoresForm } onBlur = { verificarSenha } placeholder = "Sua senha" />
                        { validFields.senha_usuario ? <></> : <p className = "menssagem-campo-incorreto">Senha deve ter entre 6 e 20 caracteres e não pode conter espaços</p> }
                    </div>

                    <div className="botoes-formulario-acesso">
                        <button type = "button" className="botao-fundo-transparente" onClick = { () => setShowPassword((prevState) => !prevState) } >{ showPassword ? "Esconder" : "Exibir" } senha</button>

                        <button type = "reset" className="botao-fundo-transparente" onClick = { limpaForms } >Limpar</button>

                        <button type = "submit" className="botao-fundo-transparente" onClick = { enviaDados }>Entrar</button>
                    </div>
                </form>

                <img src="/icones/MediaVirtu_icons/MediaVirtu_icon.png" alt="" width = "100%" />
            </div>

            <Link href = "/Acesso/Cadastro">Novo por aqui?</Link>
        </div>
    </>
}