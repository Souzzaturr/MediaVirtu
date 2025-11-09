"use client";

// Importa componentes
import { CampoFormulario } from "@/src/components/forms/CampoFormulario";

// importa hooks
import { useControllerCadastro } from "@/src/hooks/useContollerCadastro";

import Link from "next/link";



export default function Home () {
    const { nome, email, senha, nomeCorreto, emailCorreto, senhaCorreta, changeFormValue, validarCampos, showPassword, setShowPassword, limparDadosForm, isPending, enviarDadosForm } = useControllerCadastro()
    
    return <>
        <div className="bloco">
            <h2 className="titulo-form goldman-bold">Junte-se à nossa comunidade</h2>

            <p className = "texto-acesso">Cadastre-se e começe hoje mesmo a criar conteúdo no MediaVirtu!</p>

            <div id="container-formulario-imagem">
                <form className = "formulario-acesso" action="" onSubmit = { enviarDadosForm }>
                    
                    <CampoFormulario 
                                label = {{
                                    htmlFor: "nome-usuario",
                                    className: nomeCorreto ? "" : "menssagem-campo-incorreto",
                                    menssagem: "Nome de usuário " + (nomeCorreto ? "" : "inválido")
                                }}

                                input = {{
                                    type: "text",
                                    name: "nome_usuario",
                                    id: "nome-usuario",
                                    className: "campo-formulario " + (nomeCorreto ? "" : "campo-incorreto"),
                                    value: nome,
                                    onChange: changeFormValue,
                                    onBlur: validarCampos,
                                    placeholder: "Seu nome de usuário aqui"
                                }}

                                warningMessage = {{
                                    show: !nomeCorreto,
                                    message: "Nomes de usuário tem de 5 a 20 caracteres e possuem apenas letras números e underline \"_\""
                                }}
                            />

                    <CampoFormulario 
                                label = {{
                                    htmlFor: "email-usuario",
                                    className: emailCorreto ? "" : "menssagem-campo-incorreto",
                                    menssagem: "Email " + (emailCorreto ? "" : "incompleto")
                                }}

                                input = {{
                                    type: "email",
                                    name: "email_usuario",
                                    id: "email-usuario",
                                    className: "campo-formulario " + (emailCorreto ? "" : "campo-incorreto"),
                                    value: email,
                                    onChange: changeFormValue,
                                    onBlur: validarCampos,
                                    placeholder: "Seu melhor email aqui"
                                }}

                                warningMessage = {{
                                    show: !emailCorreto,
                                    message: "Email deve seguir o formato: seunome@dominio.tld"
                                }}
                            />
                    
                    <CampoFormulario 
                                label = {{
                                    htmlFor: "senha-usuario",
                                    className: senhaCorreta ? "" : "menssagem-campo-incorreto",
                                    menssagem: "Senha " + (senhaCorreta ? "" : "pequena ou com espaços")
                                }}

                                input = {{
                                    type: showPassword ? "text" : "password",
                                    name: "senha_usuario",
                                    id: "senha-usuario",
                                    className: "campo-formulario " + (senhaCorreta ? "" : "campo-incorreto"),
                                    value: senha,
                                    onChange: changeFormValue,
                                    onBlur: validarCampos,
                                    placeholder: "Sua senha"
                                }}

                                warningMessage = {{
                                    show: !senhaCorreta,
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