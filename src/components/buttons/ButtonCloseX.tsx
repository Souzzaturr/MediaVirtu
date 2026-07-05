interface props {
    children: React.ReactNode,
    classeAdicional?: string | "",
    closeFunction?: () => void,
}


export default function ButtonCloseX({children, classeAdicional, closeFunction}: props) {
    const classe = "botao-fechar" + " " + classeAdicional;

    return <>
        <div className="container-botao-fechar">

            <button className={classe} onClick={closeFunction} >X</button>

            {children}

        </div>
    </>
}