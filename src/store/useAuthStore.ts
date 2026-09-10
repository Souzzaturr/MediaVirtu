import { SYSTEM_CONFIG } from "@/src/globals/config";

import { create } from "zustand";
import { User } from "@supabase/supabase-js";


interface AuthState {
    user: User | boolean | null;
    loading: boolean;
    name: string;
    avatarUrl: string;

    setUser: (user: User | null) => void;

    setProfile: (name: string, avatarUrl: string) => void;
};



export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: true,
    name: "",
    avatarUrl: SYSTEM_CONFIG.logoPrincipal,

    setUser: (user) => set({ user, loading: false }),

    setProfile: (name="", avatarUrl=SYSTEM_CONFIG.logoPrincipal) => set({
        name: name,
        avatarUrl: avatarUrl
    })
}));