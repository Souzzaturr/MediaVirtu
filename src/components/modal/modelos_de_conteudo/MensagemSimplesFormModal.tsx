import DefaultButton from "@/src/components/buttons/DefaultButton";


interface props {
    titulo: string,
    mensagem: string,
    simFunction: () => void,
    naoFunction: () => void
};


export default function MensagemSimplesFormModal({titulo, mensagem, simFunction, naoFunction}: props) {
    return <article className="flex flex-col gap-5 w-[400px] max-w-[100%] text-center text-white">
                <h1 className="goldman-bold text-2xl" >{titulo}</h1>
                {
                    mensagem.split("\n").map((line, index) => <p key={index}>{line}</p>)
                }
                <div className="flex flex-wrap gap-3 justify-center">
                    <DefaultButton onClick={naoFunction} >Não</DefaultButton>
                    <DefaultButton onClick={simFunction} >Sim</DefaultButton>
                </div>
            </article>
}