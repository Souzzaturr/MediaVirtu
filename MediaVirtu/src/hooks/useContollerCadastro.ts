// Importa funções
import { verificaNomeUsuario, verificaEmail, verificaSenha } from "@/src/utils/verifica_campos_formulario";
import { cadastraELoga } from "@/src/utils/cadastraELoga";

// Importa hooks
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

// Importa Store de Popups
import { usePopupStore } from "@/src/store/usePopupStore";



// Define objetos;

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




// Hook useControllerCadastro
export const useControllerCadastro = () => {
    // State de valores do formulário;
    const [ formState, setFormState ] = useState(default_values_forms);
    // State que guarda se os campos do formulário estáo preenchidos corretamente ou incorretamente;
    const [ valuesCorrect, setValuesCorrect ] = useState(default_correct_values);
    // State para mostrar/esconder a senha;
    const [ showPassword, setShowPassword ] = useState(false);
    // Função para exibir uma menssagem em PopUp.
    const PopUpMenssagem = usePopupStore((state) => state.setPopupMenssagem);
    // hook para utilizar funções assíncronas;
    const [ isPending, startTransition ] = useTransition();
    // Alterar rotas;
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


    // Valida se todos os campos foram preenchidos corretamente
    const validarCampos = () => {
        setValuesCorrect({
            nome_correto: formState.nome_usuario === "" || verificaNomeUsuario(formState.nome_usuario),
            email_correto: formState.email_usuario === "" || verificaEmail(formState.email_usuario),
            senha_correta: formState.senha_usuario === "" || verificaSenha(formState.senha_usuario)
        })
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


    return {
        nome: formState.nome_usuario,
        email: formState.email_usuario,
        senha: formState.senha_usuario,
        nomeCorreto: valuesCorrect.nome_correto,
        emailCorreto: valuesCorrect.email_correto,
        senhaCorreta: valuesCorrect.senha_correta,
        changeFormValue,
        validarCampos,
        showPassword,
        setShowPassword,
        limparDadosForm,
        enviarDadosForm,
        isPending
    }
}