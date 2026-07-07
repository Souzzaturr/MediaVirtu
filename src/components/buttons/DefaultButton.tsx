"use client";

import { ReactElement } from "react";

interface props {
    children?: ReactElement | string,
    type: string,
    style: "default" | "danger" | "disable",
    disabled?: boolean,
    onClickAction?: () => void,
    onBlurAction?: () => void,
}


export default function DefaultButton ({children, type, style, disabled}: props) {
    return <button type={type} className={style}>
        {children}
    </button>
}