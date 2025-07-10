import { create } from "zustand";
import { persist } from "zustand/middleware";

type CookieConsent = "all" | "essential" | "unset";

interface CookieStore {
  consent: CookieConsent;
  setConsent: (value: CookieConsent) => void;
  resetConsent: () => void;
}

export const useCookieStore = create<CookieStore>()(
  persist(
    (set) => ({
      consent: "unset",
      setConsent: (value) => set({ consent: value }),
      resetConsent: () => set({ consent: "unset" }),
    }),
    {
      name: "cookie-consent",
    },
  ),
);
