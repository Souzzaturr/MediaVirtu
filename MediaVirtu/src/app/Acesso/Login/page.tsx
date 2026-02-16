"use client";

// Componentes
import { CampoFormulario } from "@/src/components/forms/CampoFormulario";

// Componentes do Next.js
import Link from "next/link";

// Hooks
import { useControllerLogin } from "@/src/hooks/useControllerLogin";




export default function Home () {
    const { nome, email, senha, nomeValido, emailValido, senhaValida, nome_or_email, mouseInBotaoMuda_nome_or_email, setMouseInBotaoMuda_nome_or_email, mudaCampo_nome_email, mudaValoresForm, validarCampos, showPassword, setShowPassword, limpaForms, enviaDados, isPending } = useControllerLogin();

    return <>
        <div className="bloco">
            <h2 className="titulo-form goldman-bold">É um veterano por aqui?</h2>
            <p className="texto-acesso">Faça login e volte a aproveitar o melhor do MediaVirtu!</p>

            <div id="container-formulario-imagem">
                <form className = "formulario-acesso" action="">
                    <div className="campo-acesso">

                        {nome_or_email === "nome" ?

                            <CampoFormulario 
                                label = {{
                                    htmlFor: "nome-usuario",
                                    className: nomeValido ? "" : "menssagem-campo-incorreto",
                                    menssagem: "Nome de usuário " + (nomeValido ? "" : "inválido")
                                }}

                                input = {{
                                    type: "text",
                                    name: "nome_usuario",
                                    id: "nome-usuario",
                                    className: "campo-formulario " + (nomeValido ? "" : "campo-incorreto"),
                                    value: nome,
                                    onChange: mudaValoresForm,
                                    onBlur: validarCampos,
                                    placeholder: "Seu nome de usuário aqui"
                                }}

                                warningMessage = {{
                                    show: !nomeValido,
                                    message: "Nomes de usuário tem de 5 a 20 caracteres e possuem apenas letras números e underline \"_\""
                                }}
                            />

                        :

                            <CampoFormulario 
                                label = {{
                                    htmlFor: "email-usuario",
                                    className: emailValido ? "" : "menssagem-campo-incorreto",
                                    menssagem: "Email " + (emailValido ? "" : "inválido")
                                }}

                                input = {{
                                    type: "email",
                                    name: "email_usuario",
                                    id: "email-usuario",
                                    className: "campo-formulario " + (emailValido ? "" : "campo-incorreto"),
                                    value: email,
                                    onChange: mudaValoresForm,
                                    onBlur: validarCampos,
                                    placeholder: "Seu email aqui"
                                }}

                                warningMessage = {{
                                    show: !emailValido,
                                    message: "Email deve seguir o seguinte formato: seunome@dominio.tld"
                                }}
                            />
                            
                        }

                    </div>

                    <div className="botao-mudar-nome-email">
                        <button type = "button" className="botao-fundo-transparente" onClick = { mudaCampo_nome_email } onMouseEnter = { () => setMouseInBotaoMuda_nome_or_email(true) } onMouseOut = { () => setMouseInBotaoMuda_nome_or_email(false) } >Entrar com { nome_or_email === "nome" ? "email" : "nome" } <img id = "imagem-botao-mudar-nome-email" src = { "/icones/geral/setas-ciclo/icone-setas-ciclo-" + (mouseInBotaoMuda_nome_or_email ? "preta" : "branca") + ".png" } alt = "" height = "15px"/></button>
                    </div>

                    <CampoFormulario 
                                label = {{
                                    htmlFor: "senha-usuario",
                                    className: senhaValida ? "" : "menssagem-campo-incorreto",
                                    menssagem: "Senha " + (senhaValida ? "" : "inválida")
                                }}

                                input = {{
                                    type: showPassword ? "text" : "password",
                                    name: "senha_usuario",
                                    id: "senha-usuario",
                                    className: "campo-formulario " + (senhaValida ? "" : "campo-incorreto"),
                                    value: senha,
                                    onChange: mudaValoresForm,
                                    onBlur: validarCampos,
                                    placeholder: "Sua senha"
                                }}

                                warningMessage = {{
                                    show: !senhaValida,
                                    message: "Senha deve ter entre 6 e 20 caracteres e não pode conter espaços"
                                }}
                            />

                    <div className="botoes-formulario-acesso">
                        <button type = "button" className="botao-fundo-transparente" onClick = { () => setShowPassword((prevState) => !prevState) } >{ showPassword ? "Esconder" : "Exibir" } senha</button>

                        <button type = "reset" className="botao-fundo-transparente" onClick = { limpaForms } >Limpar</button>

                        <button type = "submit" className="botao-fundo-transparente" onClick = { enviaDados } disabled = { isPending } >Entrar</button>
                    </div>
                </form>

                <img src="/icones/MediaVirtu_icons/MediaVirtu_icon.png" alt="" width = "100%" />
            </div>

            <Link href = "/Acesso/Cadastro">Novo por aqui?</Link>
        </div>
    </>
}