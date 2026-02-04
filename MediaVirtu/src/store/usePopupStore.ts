import { create } from "zustand";


interface PopupMenssagem {
    titulo: string;
    menssagem: string;
    show: boolean;
}

interface PopupPostForm {
    show: boolean;
};


interface PopupState {
    // Estado
    popupMensagem: PopupMenssagem;
    popupPostForm: PopupPostForm;
    // Ações
    setPopupMenssagem: (novaMenssagem: Partial<PopupMenssagem>) => void;
    closePopupMenssagem: () => void;
    openPopupPostForm: () => void;
    closePopupPostForm: () => void;
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
        }))
}));