import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  accessToken: string | null; // Access token
  setAccessToken: (accessToken: AuthStore["accessToken"]) => void;
  clearUser: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      accessToken: null, // Initial state

      setAccessToken: (accessToken) => set({ accessToken }), // Update access token

      clearUser: () => set({ accessToken: null }), // Clear access token
    }),
    {
      name: "auth-store", // Key in localStorage
      partialize: (state) => ({ accessToken: state.accessToken }), // Only persist accessToken
    }
  )
);

export default useAuthStore;
