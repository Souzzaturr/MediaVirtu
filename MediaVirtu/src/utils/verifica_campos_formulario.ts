// Verifica se nome de usuário tem de 5 a 20 caracteres, e contem apenas letras números e underline (nome não pode conter apenas underlines)
export function verificaNomeUsuario (nome: string): boolean {
    if (nome.length < 5 || nome.length > 20 || "___________________".includes(nome)) return false;

    const regex = /^\w+$/;
    return regex.test(nome)
}

// Verifica se um email segue o seguinte formato: seunome@dominio.tld
export function verificaEmail (email: string): boolean {
    const regex = /^[^\s@]+@[^\@]+\.[^\@s@]+$/;
    return regex.test(email)
}

// verifica se senha tem de 6 a 20 caracteres e não possui espaços
export function verificaSenha (senha: string): boolean {
    return senha.length >= 6 && senha.length <= 20 && !senha.includes(" ")
}