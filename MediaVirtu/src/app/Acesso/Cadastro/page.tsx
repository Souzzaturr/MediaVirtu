"use client";

import React, { useState, useEffect } from "react";

const default_values_forms = {
    nome_usuario: "",
    email_usuario: "",
    senha_usuario: ""
}

export default function Home () {
    const [ formState, setFormState ] = useState(default_values_forms);
    const [ showPassword, setShowPassword ] = useState(false);

    const changeFormValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormState((prevState) => ({...prevState, [ name ]: value}));
    };

    const enviarDadosForm = (event: any) => {
        event.preventDefault();
    }
    
    return <>
        <div className="bloco">
            <h2 className="goldman-bold">Cadastro</h2>

            <form action="" onSubmit = { enviarDadosForm }>
                <label htmlFor="nome-usuario">Nome de usuário</label>
                <input type="text" name = "nome_usuario" id = "nome-usuario" value = { formState.nome_usuario } onChange = { changeFormValue } placeholder = "Seu nome de usuário aqui"/>

                <label htmlFor="email-usuario">Email</label>
                <input type="email" name = "email_usuario" id = "email-usuario" value = { formState.email_usuario } onChange = { changeFormValue } placeholder = "Seu melhor email aqui"/>

                <label htmlFor="senha-usuario">Senha</label>
                <input type = { showPassword ? "text" : "password"} name = "senha_usuario" id = "senha-usuario" value = { formState.senha_usuario } onChange = { changeFormValue } placeholder = "Sua senha"/>
                <button type = "button" onClick = {() => setShowPassword(!showPassword) }>Exibir senha</button>

                <button type = "reset" onClick = {() => setFormState(default_values_forms)}>Limpar campos</button>

                <button type = "submit" onClick = { enviarDadosForm }>Cadastrar-se</button>
            </form>
        </div>
    </>
}