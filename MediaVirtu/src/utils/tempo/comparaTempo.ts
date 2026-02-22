
// Esta função recebe uma string no formato "2026-02-16T23:33:37.473217+00:00" e retorna uma string com o maior tempo de diferença entre o tempo enviado como parâmetro e o tempo atual do usuário
// "2 anos" se a maior diferença de tempo for de anos; "4 minutos" se a maior diferença de tempo for de minutos;

export function comparaTempo(dataHoraFuso: string) {
    const dataPassada = new Date(dataHoraFuso);
    const dataAtual = new Date();
    
    
    const diffEmMs = Math.abs(dataAtual.getTime() - dataPassada.getTime());


    // Tabelas de conversão
    const segundos = Math.floor(diffEmMs / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30);
    const anos = Math.floor(dias / 365);

    // Lógica de retorno (do maior para o menor)
    if (anos > 0) return `${anos} ano${anos > 1 ? 's' : ''}`;
    if (meses > 0) return `${meses} mê${meses > 1 ? 'es' : 's'}`;
    if (dias > 0) return `${dias} dia${dias > 1 ? 's' : ''}`;
    if (horas > 0) return `${horas} hora${horas > 1 ? 's' : ''}`;
    if (minutos > 0) return `${minutos} minuto${minutos > 1 ? 's' : ''}`;
    
    return `${segundos} segundo${segundos > 1 ? 's' : ''}`;
}