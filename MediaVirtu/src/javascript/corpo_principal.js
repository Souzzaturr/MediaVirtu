import linha_divisora from "./linha_divisora.js"
import shitpost from "./shitposts.js"

export default function corpo_principal () {
    return `<main id = "corpo-principal">` +
                shitpost() +
                linha_divisora() +
                shitpost() +
            `</main>`
}