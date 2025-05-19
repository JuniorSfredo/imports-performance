import { create } from "zustand";
import { AuthStoreType } from "../types/store-type/AuthStoreType";

export const useAuthStore = create<AuthStoreType>((set) => ({
  access_token: null,
  setAccessToken: (token: string) => set({ access_token: token }),
  logout: () => set({ access_token: null }),
}));
