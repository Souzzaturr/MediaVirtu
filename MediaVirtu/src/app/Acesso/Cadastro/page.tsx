"use client";

// Importa componentes
import PopupMenssagem from "../../../components/popups/PopupMenssagem";

// Importa funções
import { verificaNomeUsuario, verificaEmail, verificaSenha } from "../../../utils/verifica_campos_formulario";
import { cadastraELoga } from "@/src/actions/cadastraELoga";
// Importa hooks
import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    const [ popup, setPopup ] = useState(popupValues);                                  // State para re-renderizar o componente atual e atualizar o componente PopupMenssagem com novos valores;

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
                setPopup({titulo: "Não foi possível realizar seu cadastro agora", message: "Infelizmente houve um problema técnico, e não foi possível realizar o seu cadastro agora, poderia tentar novamente mais tarde?", show: true});

            // Se cadasto ocorrer com sucesso, exibe menssagem de popup e redireciona para inicio em 2 segundos;                
            } else {
                setPopup({titulo: "Cadastro realizado com sucesso", message: `Seja bem vindo(a) ao MediaVirtu, ${formState.nome_usuario}!`, show: true})

                setTimeout(() => router.push("/"), 2000); 
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
            setPopup({titulo: "Campos vazios", message: "Todos os campos devem ser preenchidos!!", show: true});


        // Se algum campo NÃO esiver preenchido corretamente;
        } else if (Object.values(valuesCorrect).includes(false)) {
            setPopup({titulo: "Cadastro não realizado", message: "Todos os campos devem ser preenchidos corretamente!!", show: true})


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
                    <div className="campo-acesso">
                        <label htmlFor="nome-usuario" className = { valuesCorrect.nome_correto ? "" : "menssagem-campo-incorreto"} >Nome de usuário { valuesCorrect.nome_correto ? "" : "pequeno ou com caracteres inválidos" }</label>
                        <input type="text" name = "nome_usuario" id = "nome-usuario" className = { "campo-formulario " + (valuesCorrect.nome_correto ? "" : "campo-incorreto")} value = { formState.nome_usuario } onChange = { changeFormValue } onBlur = { verificaValorNome } placeholder = "Seu nome de usuário aqui"/>
                        { valuesCorrect.nome_correto ? <></> : <p className = "menssagem-campo-incorreto">Nome de usuário deve conter de 5 a 20 caracteres e apenas letras números e underline "_"</p>}
                    </div>

                    <div className="campo-acesso">
                        <label htmlFor="email-usuario" className = { valuesCorrect.email_correto ? "" : "menssagem-campo-incorreto"}>Email { valuesCorrect.email_correto ? "" : "incompleto" }</label>
                        <input type="email" name = "email_usuario" id = "email-usuario" className = { "campo-formulario " + (valuesCorrect.email_correto ? "" : "campo-incorreto") } value = { formState.email_usuario } onChange = { changeFormValue } onBlur = { verificaValorEmail } placeholder = "Seu melhor email aqui"/>
                        { valuesCorrect.email_correto ? <></> : <p className = "menssagem-campo-incorreto">Email deve seguir o formato: seunome@dominio.tld</p>}
                    </div>

                    <div className="campo-acesso">
                        <label htmlFor="senha-usuario" className = {valuesCorrect.senha_correta ? "" : "menssagem-campo-incorreto"}>Senha { valuesCorrect.senha_correta ? "" : "pequena ou com espaços"}</label>
                        <input type = { showPassword ? "text" : "password" } name = "senha_usuario" id = "senha-usuario" className = { "campo-formulario " + (valuesCorrect.senha_correta ? "" : "campo-incorreto") } value = { formState.senha_usuario } onChange = { changeFormValue } onBlur = { verificaValorSenha } placeholder = "Sua senha"/>
                        { valuesCorrect.senha_correta ? <></> : <p className = "menssagem-campo-incorreto">Senha deve conter de 6 a 20 caracteres e não pode conter espaços</p> }
                    </div>

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

        <PopupMenssagem titulo = { popup.titulo } menssagem = { popup.message } show = { popup.show } onClose = { () => setPopup({titulo: "", message: "", show: false}) }/>
    </>
}