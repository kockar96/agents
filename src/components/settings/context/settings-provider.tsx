"use client";

import { useCallback, useState } from "react";
import type { Settings } from "../types";
import { SettingsContext } from "./settings-context";

const defaultSettings: Settings = {
  themeMode: "light",
  themeDirection: "ltr",
  themeColorPresets: "default",
  themeContrast: "default",
};

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const onToggle = useCallback(() => {
    setSettings((prev) => ({
      ...prev,
      themeMode: prev.themeMode === "light" ? "dark" : "light",
    }));
  }, []);

  const onChange = useCallback((name: string, value: any) => {
    setSettings((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, onToggle, onChange }}>
      {children}
    </SettingsContext.Provider>
  );
}
