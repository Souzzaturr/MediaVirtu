"use client";

import PopupMenssagem from "@/src/components/popups/PopupMenssagem";
import { PopupPostForm } from "@/src/components/popups/PopupPostForm";
import { PopupShitpost } from "@/src/components/popups/PopupShitpost";


export function PopupManager () {
    return <>
    
        <PopupMenssagem />

        <PopupPostForm />

        <PopupShitpost />
    
    </>
}