import { create } from "zustand";
import { User } from "@supabase/supabase-js";


interface AuthState {
    user: User | null;
    loading: boolean;

    setUser: (user: User | null) => void;
}



export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: true,

    setUser: (user) => set({ user, loading: false }),
}))