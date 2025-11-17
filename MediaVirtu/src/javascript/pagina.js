import inicio from "./inicio/inicio.js"

export default function pagina (pagina_escolhida) {
    switch (pagina_escolhida) {
        case "Inicio":
            return inicio()
        case "Sobre":
        case "Ajuda":
        case "Feedback":
        case "Configurações":
        case "Meu Perfil":
        case "Postar":
        case "Excluir":
        case "Denunciar":
        case "sair":
            return "<div class = 'bloco'> Aguardem sensacionais revelações... </div>"
    }
}