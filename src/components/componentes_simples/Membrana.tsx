import { ReactElement } from "react"


interface props {
    children: ReactElement | ReactElement[],
    classeAdicional?: string | "",
    hover?: boolean,
    hideMembrana?: boolean
}


export default function Membrana({children, classeAdicional="", hover=false, hideMembrana=false}: props) {
    const classe = "membrana-container" + (hover ? "-hover" : "") + " " + classeAdicional;

    return <>
        <div className={classe} >
            {children}
            <div className={"membrana " + (hideMembrana ? "hide" : "")} ></div>
        </div>
    </>
}