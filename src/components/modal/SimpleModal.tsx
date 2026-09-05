"use client"

import React from "react";

import ButtonCloseX from "@/src/components/buttons/ButtonCloseX";

interface props {
    children: React.ReactNode,
    id?: string | "",
    classeAdicional?: string | "",
    classeAdicionalBotaoX?: string | "",
    classeAdicionalFundo?: string | "",
    closeModalFunction?: () => void,
}   


export default function SimpleModal({children, id, classeAdicional, classeAdicionalBotaoX, classeAdicionalFundo, closeModalFunction}: props) {
    const classe = "corpo-modal rgb-border-fade " + " " + classeAdicional;
    const classeFundo = "fundo-modal" + " " + classeAdicionalFundo;

    const clickOnFundo = (e: any) => {
        if (e.target.classList[0] === "fundo-modal" && closeModalFunction) {
            closeModalFunction();
        }
    }

    return <>
        <div className={classeFundo} onClick={clickOnFundo} >
            <ButtonCloseX classeAdicional={classeAdicionalBotaoX} closeFunction={closeModalFunction} >
                <section id={id} className={classe} >
                    {children}
                </section>
            </ButtonCloseX>
        </div>
    </>
}