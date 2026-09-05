"use client";

import PopupMenssagem from "@/src/components/popups/PopupMenssagem";
import { PopupPostForm } from "@/src/components/popups/PopupPostForm";
import { PopupShitpost } from "@/src/components/popups/PopupShitpost";
import FormModal from "@/src/components/modal/FormModal";


export function PopupManager () {
    return <>
    
        <PopupMenssagem />

        <PopupPostForm />

        <PopupShitpost />

        <FormModal />
    
    </>
}