import inicio from "./inicio.js"

export default function pagina (pagina) {
    switch (pagina) {
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