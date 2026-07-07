import { create } from "zustand";
import { PopupShitpost } from "../components/popups/PopupShitpost";


interface PopupMenssagem {
    titulo: string;
    menssagem: string;
    show: boolean;
}

interface PopupPostForm {
    show: boolean;
};


interface PopupShitpost {
    show: boolean,
    id: string,
    autor_id: string,
    description: string,
    images: string[],
    created_at: string,
    profiles: {
        id: string,
        name: string,
        avatar: string
    }
}


interface PopupState {
    // Estado
    popupMensagem: PopupMenssagem;
    popupPostForm: PopupPostForm;
    popupShitpost: PopupShitpost;
    // Ações
    setPopupMenssagem: (novaMenssagem: Partial<PopupMenssagem>) => void;
    closePopupMenssagem: () => void;

    openPopupPostForm: () => void;
    closePopupPostForm: () => void;

    setPopupShitpost: (shitpost: Partial<PopupShitpost>) => void;
    openPopupShitpost: () => void;
    closePopupShitpost: () => void;
}



export const usePopupStore = create<PopupState>((set) => ({
    // Estado inicial
    popupMensagem: {
        titulo: "",
        menssagem: "",
        show: false, 
    },

    popupPostForm: {
        show: false,
    },

    popupShitpost: {
        show: false,
        id: "",
        autor_id: "",
        description: "",
        images: [],
        created_at: "",
        profiles: {
            id: "",
            name: "",
            avatar: ""
        }
    },

    // Ação: Define uma nova mensagem (faz merge com o que já existe)
    setPopupMenssagem: (novaMenssagem) => 
        set((state) => ({ 
            popupMensagem: { ...state.popupMensagem, ...novaMenssagem, show: true } 
        })),

    // Ação: Apenas fecha o popup mantendo os dados anteriores
    closePopupMenssagem: () => 
        set((state) => ({ 
            popupMensagem: { ...state.popupMensagem, show: false } 
        })),


    openPopupPostForm: () =>
        set((state) => ({
            popupPostForm: { show: true }
        })),

    closePopupPostForm: () =>
        set((state) => ({
            popupPostForm: { show: false }
        })),

    
    setPopupShitpost: (shitpost) =>
        set((state) => ({
            popupShitpost: { ...state.popupShitpost, ...shitpost, show: true }
        })),

    openPopupShitpost: () =>
        set((state) => ({
            popupShitpost: { ...state.popupShitpost, show: true }
        })),

    closePopupShitpost: () =>
        set((state) => ({
            popupShitpost: { ...state.popupShitpost, show: false }
        }))
}));