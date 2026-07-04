interface props {
    children: React.ReactNode,
    closeFunction?: () => void,

}


export default function ButtonCloseX ({ children, closeFunction }: props) {
    return <>
        <div className="container-botao-fechar">

            <button className = "botao-fechar" onClick = { closeFunction } >X</button>

            { children }

        </div>
    </>
}