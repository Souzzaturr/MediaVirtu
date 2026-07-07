export default function gerarCodigoAleatorio(tamanho) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    const array = new Array(tamanho).fill(0);
    const tamanho_characters = characters.length;

    array.forEach((_) => {
        codigo += characters.charAt(Math.floor(Math.random() * tamanho_characters));
    });

  return codigo;
}