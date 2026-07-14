import { ReactElement } from "react"


interface props {
    children?: ReactElement[],
    classeAdicional?: string | "",
    name?: string | "",
    id?: string | "",
    onChange?: (() => void) | ((e: any) => void)
}


export default function Select({children, classeAdicional, name="", id="", onChange}: props) {
    const classe = "select " + classeAdicional;

    return <>
        <select name={name} id={id} className={classe} onChange={onChange} >
            {children}
        </select>
    </>
}