"use client";


import { SYSTEM_CONFIG } from "@/src/globals/config";

import { useState, useEffect } from "react";

export default function Preloader () {
    const [ loading, setLoading ] = useState(true);

    useEffect (() => {
        const handleLoading = () => setLoading(false);

        if (document.readyState === "complete") {
            setLoading(false);

        } else {
            window.addEventListener("load", handleLoading);
        }

        return () => {
            window.removeEventListener("load", handleLoading);
        }

    }, []);

    return <>
        <section className = { "preloader" +  (loading ? "" : " preloader-hidden")}>
            <img src = { SYSTEM_CONFIG.logoPrincipal } alt = "logo-MediaVirtu" width = "35%"/>
            <h1 className = "goldman-bold">{ SYSTEM_CONFIG.name }</h1>
        </section>
        </>
    
}
