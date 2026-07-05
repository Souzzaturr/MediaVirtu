import { ReactElement } from "react";

import ButtonCloseX from "@/src/components/buttons/ButtonCloseX";

interface props {
    children: ReactElement,
    id?: string | "",
    classeAdicional?: string | "",
    classeAdicionalBotaoX?: string | "",
    classeAdicionalFundo?: string | "",
    closeModalFunction?: () => void,
}   


export default function SimpleModal({children, id, classeAdicional, classeAdicionalBotaoX, classeAdicionalFundo, closeModalFunction}: props) {
    const classe = "corpo-modal" + " " + classeAdicional;
    const classeFundo = "fundo-modal" + " " + classeAdicionalFundo; 

    return <>
        <div className={classeFundo}>
            <ButtonCloseX classeAdicional={classeAdicionalBotaoX} closeFunction={closeModalFunction} >
                <section id={id} className={classe} >
                    {children}
                </section>
            </ButtonCloseX>
        </div>
    </>
}