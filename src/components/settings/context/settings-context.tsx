"use client";

import { createContext, useContext } from "react";
import type { Settings } from "../types";

export interface SettingsContextProps {
  settings: Settings;
  onToggle: () => void;
  onChange: (name: string, value: any) => void;
}

export const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      "useSettingsContext must be used within a SettingsProvider"
    );
  }
  return context;
}
