import { create } from "zustand";

interface signinState {
  step: number;
  setStep: (step: number) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export const signinStore = create<signinState>((set) => ({
  step: 1,
  setStep: (step: number) => set({ step }),
  email: "",
  setEmail: (email: string) => set({ email }),
  password: "",
  setPassword: (password: string) => set({ password }),
}));
