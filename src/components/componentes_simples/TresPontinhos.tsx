"use client"


import { useState, useEffect, useRef } from "react";

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
    const [ proximoTelaFimX, setProximoTelaFimX ] = useState(false);
    const [ proximoTelaFimY, setProximoTelaFimY ] = useState(false);

    useEffect(() => {
        if (!showOptions) {
            return;
        }

        function detectClickOutsideTresPontinhosPopup(e: any) {
            if (e.target.className !== "tres-pontinhos-popup" && !e.target.closest(".tres-pontinhos-popup")) {
                setShowOptions(false);
            }
        }

        document.addEventListener("click", detectClickOutsideTresPontinhosPopup);

        return () => {
            document.removeEventListener("click", detectClickOutsideTresPontinhosPopup);
        }
        
    }, [showOptions])

    const popupPosicionamento = `flex flex-col${proximoTelaFimY ? "-reverse" : ""} items-${proximoTelaFimX ? "end" : "start"}`;

    function handleOptions() {
        setShowOptions(prev => !prev)
    }

    return <>
        <Membrana hover classeAdicional={classeAdicional} >
            <div className={"relative " + popupPosicionamento} >
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