
import { ReactElement } from "react";


interface props {
    children?: ReactElement | string,
    classeAdicional?: string | ""
}


export default function DefaultText({children="", classeAdicional=""}: props) {
    const classe = "text-xs md:text-sm " + classeAdicional;

    return <p className={classe} >
        {children}
    </p>
}