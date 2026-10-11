"use server"


export async function getReadmeMediaVirtu() {
    const url = process.env.GITHUB_API_REPOS_URL;

    try {
        const requisicao = await fetch(`${url}/readme`);
        const status = requisicao.status;
        
        return {status: status, body: await requisicao.json()};

    } catch (e) {
        return {error: "Não foi possível realizar a requisição."};
    }
}


export async function getCommitsMediaVirtu() {
    const url = process.env.GITHUB_API_REPOS_URL;

    try {
        const requisicao = await fetch(`${url}/commits`);
        const status = requisicao.status;

        return {status: status, body: await requisicao.json()};

    } catch (e) {
        return {error: "Não foi possível realizar a requisição."}
    }
}