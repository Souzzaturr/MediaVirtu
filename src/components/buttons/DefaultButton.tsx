import { ButtonHTMLAttributes, ReactElement } from "react";


interface defaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactElement | string,
    disabled?: boolean,
    variant?: "standart" | "danger" | "sucess",
    ref?: any,
}


const buttonsVariants = {
    standart: "",
    danger: "-danger",
    sucess: "-sucess"
}


export default function DefaultButton ({children, className="", disabled, variant="standart", ref, ...props}: defaultButtonProps) {

    type ChaveButtonsVariants = keyof typeof buttonsVariants;
    let chaveVariant: ChaveButtonsVariants = variant;
    
    const classe = `botao-fundo-transparente${buttonsVariants[chaveVariant]} ` + className;
    
    return <button ref={ref} className={classe} {...props} >
        {children}
    </button>
}