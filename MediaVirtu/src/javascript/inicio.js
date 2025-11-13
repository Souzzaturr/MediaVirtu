import shitpost from "./shitposts.js";
import linha_divisora from "./linha_divisora.js";

export default function inicio () {

    let conteudo = `
    Rosas são vermelhas
    Sua cidade vai ao ar
    Eu sou thomas
    A BOMBA TERMUCLEAR`

    return  shitpost(
        "Fulano da Silva",
        "public/icones/MediaVirtu_icons/MediaVirtu_icon.png",
        "Ontem",
        conteudo,
        ['https://preview.redd.it/a6zo3silgzr41.png?width=320&crop=smart&auto=webp&s=806318b90f9fde4fc2fb8698d6dbf298b924385b',]
    )
}