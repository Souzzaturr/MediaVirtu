// Funções
import { verificaNomeUsuario, verificaEmail, verificaSenha } from "@/src/utils/verifica_campos_formulario";
import { logaUsuario, logaUsuarioComNome } from "@/src/services/supabase/login";

// Hooks do React
import { useState, useTransition } from "react";

// Hooks do Next.js
import { useRouter } from "next/navigation";

// Importa store dos popups
import { usePopupStore } from "@/src/store/usePopupStore";




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

// Objeto para guardar valores padrões do componente Popup de menssagem
const popup_empty = {
    titulo: "",
    menssagem: "",
    show: false,
}




// Declaração do Hook
export const useControllerLogin = () => {
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
    // Função para exibir uma menssagem em PopUp.
    const PopUpMenssagem = usePopupStore((state) => state.setPopupMenssagem)
    // hook para rodar funções assíncronas;
    const [ isPending, startTransition ] = useTransition();
    // Declara instância para definir rota do usuáiro;
    const router = useRouter();



    // Função assíncrona para iniciar login;
    const iniciarLogin = async () => {
        var response;

        if (nome_or_email === "nome") {
            response = await logaUsuarioComNome(
                            formValues.nome_usuario,
                            formValues.senha_usuario
                        );


        } else {
            response = await logaUsuario(
                            formValues.email_usuario,
                            formValues.senha_usuario
                        );
        }

        if (response.error) {
            // Exibe menssagem de que login não pode ser realizado;
            PopUpMenssagem({ titulo: "Dados de login inválidos", menssagem: "Seu nome/email ou senha estão incorretos, revise se foram inseridos corretamente!!" })

        } else {
            // Exibe menssagem de que login foi realizado com sucesso;
            PopUpMenssagem({ titulo: "Login realizado com sucesso", menssagem: "Seja bem vindo(a) de volta ao MediaVirtu!!"})

            router.push("/");
        }
    }




    // Função para alterar valores dos campos do formulário recebendo como parâmetro um evento que aponta para o elemento (input) que o ativou, dando acesso as propriedades desse elemento;
    const mudaValoresForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormValues((prevState) => ({...prevState, [ name ]: value}));
    }

    


    // Função criada para melhorar leitura do botão de mudar nome-email
    const mudaCampo_nome_email = () => {
        set_nome_or_email((prevState) => prevState === "nome" ? "email" : "nome");
    }



    // Valida os campos (nome, email e senha)
    const validarCampos = () => {
        setValidFields({
            nome_usuario: formValues.nome_usuario === "" || verificaNomeUsuario(formValues.nome_usuario),
            email_usuario: formValues.email_usuario === "" || verificaEmail(formValues.email_usuario),
            senha_usuario: formValues.senha_usuario === "" || verificaSenha(formValues.senha_usuario)
        })
    }



    // Função para limpar todos os campos do formulario e resetar o validFields, removendo menssagens de incorreto;
    const limpaForms = () => {
        setFormValues(form_empty);
        setValidFields(valid_fields_default);
    }




    // Função para analisar campos preenchidos e enviar dados
    const enviaDados = (event: React.MouseEvent) => {
        event.preventDefault();

        // Define chave_nome_or_email como sendo uma chave válida de formValues e validFields
        type chavesForm = keyof typeof formValues | keyof typeof validFields;
        const chave_nome_or_email = nome_or_email + "_usuario" as chavesForm

        // Se o email/nome ou a senha estiverem vazios
        if (formValues[chave_nome_or_email] === "" || formValues.senha_usuario === "") {
            PopUpMenssagem({ titulo: "Campos vazios", menssagem: "Todos os campos devem ser preenchidos!!" });

        // Se o email/nome ou a senha estiverem incorretos
        } else if (!validFields[chave_nome_or_email] || !validFields.senha_usuario) {
            PopUpMenssagem({ titulo: "Dados inválidos", menssagem: "Todos os campos devem ser preenchidos corretamente!!" });

        // Tudo ok
        } else {
            
            // Inicia o chamado à função de forma assíncrona;
            startTransition(iniciarLogin);

        }
    }

//const { nome, email, senha, nomeValido, emailValido, senhaValida, nome_or_email, mudaValoresForm, validarCampo, showPassword, setShowPassword, limpaForms, enviaDados, isPending }
    return {
        nome: formValues.nome_usuario,
        email: formValues.email_usuario,
        senha: formValues.senha_usuario,
        nomeValido: validFields.nome_usuario,
        emailValido: validFields.email_usuario,
        senhaValida: validFields.senha_usuario,
        mouseInBotaoMuda_nome_or_email,
        setMouseInBotaoMuda_nome_or_email,
        mudaCampo_nome_email,
        nome_or_email,
        mudaValoresForm,
        validarCampos,
        showPassword,
        setShowPassword,
        limpaForms,
        enviaDados,
        isPending
    }
}