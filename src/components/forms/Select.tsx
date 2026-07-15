import { ReactElement } from "react"


interface props {
    children?: ReactElement[] | ReactElement,
    classeAdicional?: string | "",
    name?: string | "",
    id?: string | "",
    disable?: boolean,
    onChange?: (() => void) | ((e: any) => void)
}


export default function Select({children, classeAdicional, name="", id="", disable=false, onChange}: props) {
    const classe = "select ";

    return <>
        <div className={"membrana-container " + classeAdicional} >
            <select name={name} id={id} className={classe} onChange={onChange} >
                {children}
            </select>

            <div className={"membrana " + (disable ? "cursor-not-allowed" : "hidden")} ></div>
        </div>
    </>
}