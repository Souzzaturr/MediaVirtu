"use client";

import { ButtonHTMLAttributes, ReactElement } from "react";

interface defaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactElement | string,
    disabled?: boolean,
    ref?: any,
}


export default function DefaultButton ({children, className="", disabled, ref, ...props}: defaultButtonProps) {
    const classe = "botao-fundo-transparente " + className;
    
    return <button ref={ref} className={classe} {...props} >
        {children}
    </button>
}