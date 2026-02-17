interface props {
    closeFunction: () => void
    children: React.ReactNode;
}


export function ButtonCloseX ({ children, closeFunction }: props) {
    return <>
        <div className="container-botao-fechar">

            <button className = "botao-fechar" onClick = { closeFunction } >X</button>

            { children }

        </div>
    </>
}