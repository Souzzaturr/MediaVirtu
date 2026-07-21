"use client"


import { useState } from "react";

import Membrana from "@/src/components/componentes_simples/Membrana";


interface props {
    classeAdicional?: string | "",
    options?:{
            optionName: string | "",
            optionFunction: () => void
        }[] | []
}


export default function TresPontinhos ({classeAdicional="", options=[]}: props) {
    const [ showOptions, setShowOptions ] = useState(false);

    function handleOptions() {
        setShowOptions(prev => !prev)
    }

    return <>
        <Membrana hover classeAdicional={classeAdicional} >
            <div className="relative flex flex-row-reverse " >
                <button className = "tres-pontinhos" onClick={handleOptions} >
                    <div className = "tres-pontinhos-ponto"></div>
                    <div className = "tres-pontinhos-ponto"></div>
                    <div className = "tres-pontinhos-ponto"></div>
                </button>

                <>{ showOptions && 
                <section className="tres-pontinhos-popup" >
                    { options.map((option, index) => <button className="tres-pontinhos-option" onClick={option.optionFunction} key={"option-" + index} >{option.optionName}</button> ) }
                </section>
                }</>

            </div>
        </Membrana>
    </>
}