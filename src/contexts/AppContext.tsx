import { createContext, useMemo, type ReactNode } from "react";
import { API_BASE_URL } from "@/services/api";

export interface AppContextValue {
  appName: string;
  tagline: string;
  /** True once VITE_API_BASE_URL is configured. No backend is wired yet. */
  isApiConfigured: boolean;
}

export const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const value = useMemo<AppContextValue>(
    () => ({
      appName: "SmartAgri AI",
      tagline: "Smart Agriculture Crop Disease and Farm Advisory System",
      isApiConfigured: Boolean(API_BASE_URL),
    }),
    [],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
