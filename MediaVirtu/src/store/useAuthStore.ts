import { create } from "zustand";
import { User } from "@supabase/supabase-js";


interface AuthState {
    user: User | null | boolean;

    setUser: (user: User | null | boolean) => void;
}



export const useAuthStore = create<AuthState>((set) => ({
    user: null,

    setUser: (user) => set({ user }),
}))