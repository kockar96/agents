"use client";

import { createContext, useContext } from "react";

const SnackbarContext = createContext({ show: (msg: string) => {} });

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarContext.Provider value={{ show: () => {} }}>
      {children}
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}
