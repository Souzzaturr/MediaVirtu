"use client";

// Importa componentes
import PopupMenssagem from "../../../components/popups/PopupMenssagem";
import { CampoFormulario } from "@/src/components/forms/CampoFormulario";

// Importa funções
import { verificaNomeUsuario, verificaEmail, verificaSenha } from "../../../utils/verifica_campos_formulario";
import { cadastraELoga } from "@/src/actions/cadastraELoga";
// Importa hooks
import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { usePopupStore } from "@/src/store/usePopupStore";



// Valor padrão do formulário (quando estiver limpo)
const default_values_forms = {
    nome_usuario: "",
    email_usuario: "",
    senha_usuario: ""
}

// Objeto que guarda se cada campo está preenchido corretamente (true) ou não (false)
const default_correct_values = {
    nome_correto: true,
    email_correto: true,
    senha_correta: true
}

// Objeto que guarda valores vazios para o componente PopupMenssagem
const popupValues = {
    titulo: "",
    message: "",
    show: false
}

export default function Home () {
    const [ formState, setFormState ] = useState(default_values_forms);                 // State de valores do formulário;
    const [ valuesCorrect, setValuesCorrect ] = useState(default_correct_values);       // State que guarda se os campos do formulário estáo preenchidos corretamente ou incorretamente;
    const [ showPassword, setShowPassword ] = useState(false);                          // State para mostrar/esconder a senha;

    // Função para exibir uma menssagem em PopUp.
    const PopUpMenssagem = usePopupStore((state) => state.setPopupMenssagem);


    const [ isPending, startTransition ] = useTransition();
    // hook para utilizar funções assíncronas;

    // Rotas;
    const router = useRouter();


    // Função assíncrona para mandar dados do formulário para função de cadastro;
    const iniciarCadastro = async () => {
            const response = await cadastraELoga(
                                        formState.nome_usuario,
                                        formState.email_usuario,
                                        formState.senha_usuario
                                    );
            
            // Se houver erro no cadastro, exibe menssagem de popup;                                    
            if (response.error) {
                PopUpMenssagem({ titulo: "Não foi possível realizar seu cadastro agora", menssagem: "Infelizmente houve um problema técnico, e não foi possível realizar o seu cadastro agora, poderia tentar novamente mais tarde?" });

            // Se cadasto ocorrer com sucesso, exibe menssagem de popup e redireciona para inicio;                
            } else {
                PopUpMenssagem({ titulo: "Cadastro realizado com sucesso", menssagem: `Seja bem vindo(a) ao MediaVirtu, ${formState.nome_usuario}!` });

                router.push("/");
            }
        }
    

    // Função para atualizar os campos no formulário
    const changeFormValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormState((prevState) => ({...prevState, [ name ]: value}));
    };

    // Verifica se nome de usuário inserido possui tamanho correto e não possui caracteres especiais.
    const verificaValorNome = () => {
        setValuesCorrect((prevState) => ({...prevState, nome_correto: formState.nome_usuario !== "" ? verificaNomeUsuario(formState.nome_usuario) : true }))
    }

    // verifica se email inserido possui formato correto
    const verificaValorEmail = () => {
        setValuesCorrect((prevState) => ({...prevState, email_correto: formState.email_usuario !== "" ? verificaEmail(formState.email_usuario) : true }));
    }

    // Verifica se senha inserida pelo usuário possui tamanho correto e não possui espaços
    const verificaValorSenha = () => {
        setValuesCorrect((prevState) => ({...prevState, senha_correta: formState.senha_usuario !== "" ? verificaSenha(formState.senha_usuario) : true}))
    }

    // Limpa todos os campos do formulário
    const limparDadosForm = () => {
        setFormState(default_values_forms);
        setValuesCorrect(default_correct_values);
    }

    // Exibe Popups que informam se os dados estão preenchidos corretamente, se está faltando preencher algum campo do formulário, ou se o cadastro pode ser realizado
    const enviarDadosForm = (event: any) => {
        event.preventDefault();


        // Se algum campo estiver vazio;
        if (Object.values(formState).includes("")) {
            PopUpMenssagem({ titulo: "Campos vazios", menssagem: "Todos os campos devem ser preenchidos!!" });


        // Se algum campo NÃO esiver preenchido corretamente;
        } else if (Object.values(valuesCorrect).includes(false)) {
            PopUpMenssagem({ titulo: "Cadastro não realizado", menssagem: "Todos os campos devem ser preenchidos corretamente!!" })


        } else {

            // Inicia o chamado à função de forma assíncrona;
            startTransition(iniciarCadastro)
        }
    }
    
    return <>
        <div className="bloco">
            <h2 className="titulo-form goldman-bold">Junte-se à nossa comunidade</h2>

            <p className = "texto-acesso">Cadastre-se e começe hoje mesmo a criar conteúdo no MediaVirtu!</p>

            <div id="container-formulario-imagem">
                <form className = "formulario-acesso" action="" onSubmit = { enviarDadosForm }>
                    
                    <CampoFormulario 
                                label = {{
                                    htmlFor: "nome-usuario",
                                    className: valuesCorrect.nome_correto ? "" : "menssagem-campo-incorreto",
                                    menssagem: "Nome de usuário " + (valuesCorrect.nome_correto ? "" : "inválido")
                                }}

                                input = {{
                                    type: "text",
                                    name: "nome_usuario",
                                    id: "nome-usuario",
                                    className: "campo-formulario " + (valuesCorrect.nome_correto ? "" : "campo-incorreto"),
                                    value: formState.nome_usuario,
                                    onChange: changeFormValue,
                                    onBlur: verificaValorNome,
                                    placeholder: "Seu nome de usuário aqui"
                                }}

                                warningMessage = {{
                                    show: !valuesCorrect.nome_correto,
                                    message: "Nomes de usuário tem de 5 a 20 caracteres e possuem apenas letras números e underline \"_\""
                                }}
                            />

                    <CampoFormulario 
                                label = {{
                                    htmlFor: "email-usuario",
                                    className: valuesCorrect.email_correto ? "" : "menssagem-campo-incorreto",
                                    menssagem: "Email " + (valuesCorrect.email_correto ? "" : "incompleto")
                                }}

                                input = {{
                                    type: "email",
                                    name: "email_usuario",
                                    id: "email-usuario",
                                    className: "campo-formulario " + (valuesCorrect.email_correto ? "" : "campo-incorreto"),
                                    value: formState.email_usuario,
                                    onChange: changeFormValue,
                                    onBlur: verificaValorEmail,
                                    placeholder: "Seu melhor email aqui"
                                }}

                                warningMessage = {{
                                    show: !valuesCorrect.email_correto,
                                    message: "Email deve seguir o formato: seunome@dominio.tld"
                                }}
                            />
                    
                    <CampoFormulario 
                                label = {{
                                    htmlFor: "senha-usuario",
                                    className: valuesCorrect.senha_correta ? "" : "menssagem-campo-incorreto",
                                    menssagem: "Senha " + (valuesCorrect.senha_correta ? "" : "pequena ou com espaços")
                                }}

                                input = {{
                                    type: showPassword ? "text" : "password",
                                    name: "senha_usuario",
                                    id: "senha-usuario",
                                    className: "campo-formulario " + (valuesCorrect.senha_correta ? "" : "campo-incorreto"),
                                    value: formState.senha_usuario,
                                    onChange: changeFormValue,
                                    onBlur: verificaValorSenha,
                                    placeholder: "Sua senha"
                                }}

                                warningMessage = {{
                                    show: !valuesCorrect.senha_correta,
                                    message: "Senha deve conter de 6 a 20 caracteres e não pode conter espaços"
                                }}
                            />

                    <div className="botoes-formulario-acesso">                        
                        <button type = "button" className = "botao-fundo-transparente" onClick = {() => setShowPassword(!showPassword) }>{ showPassword ? "Esconder" : "Exibir" } senha</button>
                    
                        <button type = "reset" className = "botao-fundo-transparente" onClick = { limparDadosForm }>Limpar</button>

                        <button type = "submit" className = "botao-fundo-transparente" onClick = { enviarDadosForm } disabled = { isPending } >Cadastrar-se</button>
                    </div>
                </form>

                <img src = "/icones/MediaVirtu_icons/MediaVirtu_icon.png" width = "100%"/>
            </div>

            <Link href = "/Acesso/Login">Já possui uma conta?</Link>
        </div>
    </>
}