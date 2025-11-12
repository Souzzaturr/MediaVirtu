import shitpost from "./shitposts.js";
import linha_divisora from "./linha_divisora.js";

export default function inicio () {
    //futuramente implementar funcionalidade para ler direto do banco de dados
    return shitpost() + linha_divisora() + shitpost()
}