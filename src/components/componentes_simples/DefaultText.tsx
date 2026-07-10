
import { ReactElement } from "react";


interface props {
    children?: ReactElement | string,
    classeAdicional?: string | "",
    key?: number | 0,
}


export default function DefaultText({children="", classeAdicional="", key=0}: props) {
    const classe = "text-xs md:text-sm " + classeAdicional;

    return <p className={classe} key={key} >
        {children}
    </p>
}